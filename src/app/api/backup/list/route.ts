import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUserFromRequest } from '@/lib/user-auth'

export async function GET(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  const backups = await prisma.backup.findMany({
    where: { userId: auth.userId },
    select: { id: true, sizeBytes: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json({ backups })
}
