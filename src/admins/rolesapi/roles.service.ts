import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdminInput: CreateRoleInput) {
    return this.prisma.adminRole.create({
      data: {
        ...createAdminInput,
      },
    });
  }

  async findAll({ skip, take, where }) {
    return this.prisma.adminRole.findMany({
      skip,
      orderBy: {
        admin_role_name:"desc",
      },
      take,
      where,
      include: {
        role_accesses: {
          include: {
            admin_accesses: true,
          },
        },
      },
    });
  }

  async getAccessIdsByName(names: string[]) {
    const ids = await this.prisma.adminAccesses.findMany({
      where: {
        access_name: {
          in:names
        }
      },
      select: {
        admin_access_id:true
      }

    })

    return ids
  }
  async update(admin_role_id: string, input: UpdateRoleInput) {
    const updatePayload: any = {
      ...input,
    };
    const addedAccessNames = input.added_access_names ? input.added_access_names : [];
    const addedAccessIds = addedAccessNames? await  this.getAccessIdsByName(addedAccessNames):[]
    if (input.remove_access_names && input.remove_access_names.length>0) {
      const removedAccessids = await this.getAccessIdsByName(input.remove_access_names)

      await this.prisma.adminRoleAccesses.deleteMany({
        where: {
          admin_role_id,
          AND: {
            OR: removedAccessids
          },
        },
      });
    }

    delete updatePayload.added_access_names;
    delete updatePayload.remove_access_names;
    delete updatePayload.admin_role_id;

    return this.prisma.adminRole.update({
      where: {
        admin_role_id,
      },
      data: {
        ...updatePayload,
        role_accesses: {
          createMany: {
            data:addedAccessIds
          }

        },
      },
      include: {
        role_accesses: {
          include: {
            admin_accesses: true,
          },
        },
      },
    });
  }

  async findAllLoginHistory({ skip, take }) {
    return this.prisma.adminLoginLog.findMany({
      skip,
      take,
      orderBy: {
        login_time:"desc",
      },
      include: {
        admins: true,
      },
    });
  }

  async findAllAccess({ skip, take, where }) {
    return this.prisma.adminAccesses.findMany({
      skip,
      take,
      where,
    });
  }
}
