// Async function to insert data into a table
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newLink = await prisma.user.create({
    data: {
        name:"Vishal Maharathy",
        email:"vishalmaharathy76@gmail.com",
        password:"password1"
    },
  })
    const allLinks = await prisma.user.findMany()
    console.log(allLinks)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })