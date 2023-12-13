import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import rawaccesses from '../src/configs/accesses.config';

const prisma = new PrismaClient();


async function main() {
  const accesses = Object.keys(rawaccesses).map((key) => {
    return { access_name: key }
  })



  const admin_role = await prisma.admin_roles.create({
    data: {
      admin_role_name: "super_admin",
      role_accesses: {
        create: accesses.map((item) => {
          return {
            admin_accesses: {
              create: item
            }
          }
        })
      }

    }
  });


  const agentHashedPassword = await hash("Agent@123", 10);
  // create root agent
  await prisma.agents.create({
    data: {
      agent_name: "root",
      agent_password: agentHashedPassword,
      created_by:"root"
    }
  })



  const hashedPassword = await hash("Admin@123", 10);

  await prisma.admins.create({
    data: {
      admin_name: "testadmin",
      admin_password: hashedPassword,
      created_by: "root",
      admin_roles: {
        connect: {
          admin_role_id: admin_role.admin_role_id
        }
      }


    }
  })


}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
