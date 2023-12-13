import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(createAdminInput: CreateRoleInput) {

    return this.prisma.admin_roles.create({

      data: {
        ...createAdminInput,
      }
    })
  }

  async findAll() {
    return this.prisma.admin_roles.findMany({
      include: {
        role_accesses: {
          include: {
            admin_accesses: true
          }
        },

      }
    });

  }


  async update(admin_role_id: string, input: UpdateRoleInput) {


    const updatePayload: any = {
      ...input
    }
    const addedRoles = input.added_roles_ids ? input.added_roles_ids : []


    if (input.remove_roles_ids) {
      await this.prisma.admin_role_accesses.deleteMany(
        {
          where: {
            admin_role_id,
            AND: {
              OR: input.remove_roles_ids.map((item) => {
                return { admin_access_id: item }
              })
            }
          },
        }
      )
    }



    delete updatePayload.addedRolesIds;
    delete updatePayload.removeRolesIds;
    delete updatePayload.adminRoleID;

    return this.prisma.admin_roles.update({
      where: {
        admin_role_id
      },
      data: {

        ...updatePayload,
        admin_accesses: {
          create: addedRoles.map((item) => {
            return { admin_access_id: item }
          }),
          
        }
      },
      include: {
        role_accesses: {
          include: {
            admin_accesses: true
          }
        },

      }


    })
  }


  async findAllLoginHistory() {
    return this.prisma.admin_login_logs.findMany({
      include: {
        admins: true
      }
    })
  }

  async findAllAccess() {
    return this.prisma.admin_accesses.findMany()
  }

}
