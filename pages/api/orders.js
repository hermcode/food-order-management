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
    return res.status(200).json(order)
  }

  const orders = await prisma.order.findMany({
    where:{
      orderState: false
    }
  })

  return res.status(200).json(orders)
}