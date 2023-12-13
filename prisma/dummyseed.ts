
const { PrismaClient }= require('@prisma/client');
const { hash, compare }= require('bcrypt');


const prisma = new PrismaClient();




async function main() {
 

    const hashedPassword = await hash("Test@123", 10);

    const agent = await prisma.agents.create({
        data: {
            agent_name: "testagent",
            agent_password: hashedPassword,
            created_by: "root",
            
        }
    })

    
  await prisma.players.create({
      data: {
            
            name: "player1",
            tg_id: "tg1",
            tg_first_name: "player",
            tg_last_name: "1",
            tg_user_name: "player1",
            tg_photo_url: "tgPhotoUrl",
          user_language: "userLanguage",
            registration_ip: "registrationIp",
            registration_date: new Date().toString(),
          agent_id_r: agent.agent_id
          
    }})


    await prisma.players.create({
        data: {
            name: "player2",
            tg_id: "tg2",
            tg_first_name: "player",
            tg_last_name: "2",
            tg_user_name: "player2",
            tg_photo_url: "tgPhotoUrl",
          user_language: "userLanguage",
            registration_ip: "registrationIp",
            registration_date: new Date().toString(),
            agent_id_r: agent.agent_id
        }})

 


 


}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
