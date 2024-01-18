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

    return this.prisma.adminRole.create({

      data: {
        ...createAdminInput,
      }
    })
  }

  async findAll({skip,take,where}) {
    return this.prisma.adminRole.findMany({
      skip, take,
      where,
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
      await this.prisma.adminRoleAccesses.deleteMany(
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



  
  delete updatePayload.added_roles_ids;
  delete updatePayload.remove_roles_ids;
  delete updatePayload.admin_role_id;

    return this.prisma.adminRole.update({
      where: {
        admin_role_id
      },
      data: {

        ...updatePayload,
        role_accesses: {
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


  async findAllLoginHistory({skip,take}) {
    return this.prisma.adminLoginLog.findMany({
      skip,take,
      include: {
        admins: true
      }
    })
  }

  async findAllAccess({skip,take}) {
    return this.prisma.adminAccesses.findMany({
      skip,take
    })
  }

}
