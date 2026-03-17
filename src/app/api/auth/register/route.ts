import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, signUserToken, getUserCookieOptions } from '@/lib/user-auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Email, mot de passe et nom requis' }, { status: 400 })
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'Cet email est deja utilise' }, { status: 409 })
    }
    const passwordHash = await hashPassword(password)
    const user = await prisma.user.create({ data: { email, passwordHash, name } })
    const token = await signUserToken(user.id, user.email)
    const cookieOpts = getUserCookieOptions()
    const response = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } })
    response.cookies.set(cookieOpts.name, token, cookieOpts)
    response.headers.set('X-Auth-Token', token)
    return response
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
