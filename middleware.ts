import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
 
export const config = {
  matcher: '/',
}