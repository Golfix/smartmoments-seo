import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUserFromRequest } from '@/lib/user-auth'

export async function GET(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  const cloudData = await prisma.cloudData.findUnique({ where: { userId: auth.userId } })
  if (!cloudData) return NextResponse.json({ error: 'Aucune donnee cloud' }, { status: 404 })
  return new NextResponse(cloudData.data, {
    headers: { 'Content-Type': 'application/octet-stream', 'Content-Length': String(cloudData.sizeBytes) }
  })
}

export async function PUT(request: NextRequest) {
  const auth = await verifyUserFromRequest(request)
  if (!auth) return NextResponse.json({ error: 'Non authentifie' }, { status: 401 })
  try {
    const body = await request.arrayBuffer()
    const data = Buffer.from(body)
    await prisma.cloudData.upsert({
      where: { userId: auth.userId },
      create: { userId: auth.userId, data, sizeBytes: data.length },
      update: { data, sizeBytes: data.length },
    })
    return NextResponse.json({ success: true, sizeBytes: data.length })
  } catch (error) {
    console.error('Cloud data error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
