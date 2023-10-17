import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Station } from "@prisma/client"

type ResponseData = {
  stations: Station[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let prisma = new PrismaClient();

  const stations = await prisma.station.findMany()

  const responseData: ResponseData = {
    stations: stations,
  };

  res.status(200).json(responseData);
}