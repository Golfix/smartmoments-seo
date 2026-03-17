import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUserFromRequest } from '@/lib/user-auth'

export async function GET(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  const id = request.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'ID requis' }, { status: 400 })
  const backup = await prisma.backup.findFirst({ where: { id, userId: auth.userId } })
  if (!backup) return NextResponse.json({ error: 'Backup introuvable' }, { status: 404 })
  return new NextResponse(backup.data, {
    headers: { 'Content-Type': 'application/octet-stream', 'Content-Length': String(backup.sizeBytes) }
  })
}
