
const { PrismaClient }= require('@prisma/client');
const { hash, compare }= require('bcrypt');


const prisma = new PrismaClient();




async function main() {
 

    const hashedPassword = await hash("Test@123", 10);

    const agent = await prisma.agents.create({
        data: {
            agentName: "testagent",
            agentPassword: hashedPassword,
            createdBy: "root",
            
        }
    })

    
  await prisma.players.create({
        data: {
            name: "player1",
            tgID: "tg1",
            tgFirstName: "player",
            tgLastName: "1",
            tgUsername: "player1",
            tgPhotoUrl: "tgPhotoUrl",
            userLanguage: "userLanguage",
            registrationIp: "registrationIp",
            registrationDate: new Date().toString(),
            agentID:agent.agentID,
    }})


    await prisma.players.create({
        data: {
            name: "player2",
            tgID: "tg2",
            tgFirstName: "player",
            tgLastName: "2",
            tgUsername: "player2",
            tgPhotoUrl: "tgPhotoUrl",
            userLanguage: "userLanguage",
            registrationIp: "registrationIp",
            registrationDate: new Date().toString(),
            agentID:agent.agentID,
    }})

 


 


}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
