import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Station } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Station | undefined>  
) {

  const prisma = new PrismaClient();

  const { id } = req.query;
  const stringId = Array.isArray(id) ? id[0] : id;

  const station = await prisma.station.findUnique ({ 
    where: { id: stringId },
    include: {
      ports: true
    }
  });

  res.status(200).json(station ? station : undefined);
}