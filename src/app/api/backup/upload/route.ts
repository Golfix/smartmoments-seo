import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUserFromRequest } from '@/lib/user-auth'

export async function POST(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  try {
    const body = await request.arrayBuffer()
    const data = Buffer.from(body)
    // Keep max 5 backups per user
    const existing = await prisma.backup.findMany({ where: { userId: auth.userId }, orderBy: { createdAt: 'desc' } })
    if (existing.length >= 5) {
      const toDelete = existing.slice(4)
      await prisma.backup.deleteMany({ where: { id: { in: toDelete.map(b => b.id) } } })
    }
    const backup = await prisma.backup.create({
      data: { userId: auth.userId, data, sizeBytes: data.length }
    })
    return NextResponse.json({ success: true, id: backup.id, sizeBytes: backup.sizeBytes })
  } catch (error) {
    console.error('Backup upload error:', error)
    return NextResponse.json({ error: 'Erreur upload' }, { status: 500 })
  }
}
