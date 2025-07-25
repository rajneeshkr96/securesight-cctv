// app/api/incidents/[id]/resolve/route.ts

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  // Extract the ID from the pathname
  const segments = req.nextUrl.pathname.split('/');
  const incidentId = Number(segments[segments.length - 2]); 

  if (isNaN(incidentId)) {
    return NextResponse.json({ error: 'Invalid incident ID' }, { status: 400 });
  }

  const existing = await prisma.incident.findUnique({ where: { id: incidentId } });

  if (!existing) {
    return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
  }

  const updated = await prisma.incident.update({
    where: { id: incidentId },
    data: { resolved: !existing.resolved },
  });

  return NextResponse.json(updated);
}
