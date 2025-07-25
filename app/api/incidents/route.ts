import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resolvedParam = searchParams.get('resolved');

  const resolved = resolvedParam === 'true' ? true : resolvedParam === 'false' ? false : undefined;

  const incidents = await prisma.incident.findMany({
    where: resolved !== undefined ? { resolved } : {},
    orderBy: { tsStart: 'desc' },
  });

  return NextResponse.json(incidents);
}
