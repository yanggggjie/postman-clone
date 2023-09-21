import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getData() {
  const data = await prisma.user.findMany()
  console.log(data)
}

getData()
