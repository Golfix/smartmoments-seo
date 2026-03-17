import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUserFromRequest } from '@/lib/user-auth'

export async function GET(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  const user = await prisma.user.findUnique({ where: { id: auth.userId }, select: { id: true, email: true, name: true, createdAt: true } })
  if (!user) return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 })
  return NextResponse.json({ user })
}
