import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany()

  res.status(200).json(categories)
}
