const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userSeed = async () => {
  for (let i = 0; i < 100; i++) {
    const user = await prisma.pemilih.create({
      data: {
        npm: `21100200${i}`,
        prodi: 'FTI'
      }
    });

    console.log(`Create User : ${user.npm}`);
    console.log(`User Count : ${i}`);
  }
};

userSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
