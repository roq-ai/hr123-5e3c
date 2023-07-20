import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { accessRightsValidationSchema } from 'validationSchema/access-rights';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.access_rights
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getAccessRightsById();
    case 'PUT':
      return updateAccessRightsById();
    case 'DELETE':
      return deleteAccessRightsById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAccessRightsById() {
    const data = await prisma.access_rights.findFirst(convertQueryToPrismaUtil(req.query, 'access_rights'));
    return res.status(200).json(data);
  }

  async function updateAccessRightsById() {
    await accessRightsValidationSchema.validate(req.body);
    const data = await prisma.access_rights.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteAccessRightsById() {
    const data = await prisma.access_rights.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
