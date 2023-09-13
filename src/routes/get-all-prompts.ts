import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function getAllPrompsRoute(app: FastifyInstance) {
  app.get('/promps', async () => {
    const promps = await prisma.promp.findMany()

    return promps
  })
}
