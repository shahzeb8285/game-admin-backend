import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import rawaccesses from '../src/configs/accesses.config';

const prisma = new PrismaClient();

async function main() {
  const rawAccesses = Object.keys(rawaccesses).map((key) => {
    return { access_name: key };
  });

  await prisma.admin_accesses.createMany({
    data: rawAccesses,
  });
  const rootUUID = 'f87da71f-959d-4845-9098-c67cd3d774df';

  const accesses = await prisma.admin_accesses.findMany();

  const admin_role = await prisma.admin_roles.create({
    data: {
      admin_role_name: 'super_admin',
      created_by: rootUUID, //todo Add the missing created_by property
      admin_role_accesses: {
        create: accesses.map((item) => {
          return {
            admin_accesses: {
              connect: {
                admin_access_id: item.admin_access_id,
              },
            },
            created_by: rootUUID,
            //todo fix the created_by property
            updated_by: rootUUID,
            //todo fix the updated_by property
          };
        }),
      },
    },
  });

  const agentHashedPassword = await hash('Agent@123', 10);
  // create root agent
  await prisma.agents.create({
    data: {
      agent_name: 'root',
      agent_password: agentHashedPassword,
      created_by: rootUUID,
    },
  });

  const hashedPassword = await hash('Admin@123', 10);

  await prisma.admins.create({
    data: {
      admin_name: 'testadmin',
      admin_password: hashedPassword,
      created_by: rootUUID,
      admin_roles: {
        connect: {
          admin_role_id: admin_role.admin_role_id,
        },
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
