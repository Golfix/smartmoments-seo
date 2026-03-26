import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(request: Request) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20")));
    const skip = (page - 1) * limit;

    const [requests, total, unread] = await Promise.all([
      prisma.contactRequest.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.contactRequest.count(),
      prisma.contactRequest.count({ where: { read: false } }),
    ]);

    // Count by event type
    const allRequests = await prisma.contactRequest.findMany({
      select: { evenement: true, createdAt: true },
    });

    const byEventType: Record<string, number> = {};
    for (const r of allRequests) {
      byEventType[r.evenement] = (byEventType[r.evenement] || 0) + 1;
    }

    // Count by month (last 6 months)
    const now = new Date();
    const byMonth: { month: string; count: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
      const monthLabel = d.toLocaleDateString("fr-FR", {
        month: "short",
        year: "numeric",
      });
      const count = allRequests.filter(
        (r) => r.createdAt >= d && r.createdAt < nextMonth
      ).length;
      byMonth.push({ month: monthLabel, count });
    }

    // This month count
    const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisMonth = allRequests.filter(
      (r) => r.createdAt >= thisMonthStart
    ).length;

    return NextResponse.json({
      requests,
      stats: {
        total,
        unread,
        thisMonth,
        byEventType,
        byMonth,
      },
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Erreur admin requests:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
