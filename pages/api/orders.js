import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

  const prisma = new PrismaClient()

  if(req.method === "POST") {

    const order = await prisma.order.create({
      data: {
        customerName: req.body.customerName,
        date: req.body.date,
        total: req.body.total,
        orderDetails: req.body.orderDetails
      }
    })
    res.json(order)
  }
}