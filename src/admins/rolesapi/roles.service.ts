import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdminInput: CreateRoleInput, createdBy: string) {
    return this.prisma.admin_roles.create({
      data: {
        ...createAdminInput,
        created_by: createdBy,
      },
    });
  }

  async findAll({ skip, take, where }) {
    return this.prisma.admin_roles.findMany({
      skip,
      orderBy: {
        admin_role_name: 'desc',
      },
      take,
      where,
      include: {
        admin_role_accesses: {
          include: {
            admin_accesses: true,
          },
        },
      },
    });
  }

  async getAccessIdsByName(names: string[]) {
    const ids = await this.prisma.admin_accesses.findMany({
      where: {
        access_name: {
          in: names,
        },
      },
      select: {
        admin_access_id: true,
      },
    });

    return ids;
  }

  // async getAccessByIds(addedIds: any) {
  //   const filteredAccesses = [];
  //   const accesses = await this.prisma.admin_accesses.findMany();
  //   console.log('addedIds', addedIds, accesses);
  //   addedIds.forEach((id) => {
  //     const foundAccess = accesses.find(
  //       (access) => access.admin_access_id === id.admin_access_id,
  //     );
  //     if (foundAccess) {
  //       filteredAccesses.push(foundAccess);
  //     }
  //   });
  //   console.log('filteredAccesses', filteredAccesses);

  //   return filteredAccesses;
  // }

  async update(
    admin_id: string,
    admin_role_id: string,
    input: UpdateRoleInput,
  ) {
    const updatePayload: any = {
      ...input,
    };
    const addedAccessNames = input.added_access_names
      ? input.added_access_names
      : [];
    const addedAccessIds = addedAccessNames
      ? await this.getAccessIdsByName(addedAccessNames)
      : [];
    if (input.remove_access_names && input.remove_access_names.length > 0) {
      const removedAccessids = await this.getAccessIdsByName(
        input.remove_access_names,
      );

      await this.prisma.admin_role_accesses.deleteMany({
        where: {
          admin_role_id,
          AND: {
            OR: removedAccessids,
          },
        },
      });
    }

    delete updatePayload.added_access_names;
    delete updatePayload.remove_access_names;
    delete updatePayload.admin_role_id;

    // const addedAccesses = await this.getAccessByIds(addedAccessIds);

    return this.prisma.admin_roles.update({
      where: {
        admin_role_id,
      },
      data: {
        ...updatePayload,
        admin_role_accesses: {
          create: addedAccessIds.map((item) => {
            return {
              admin_accesses: {
                connect: {
                  admin_access_id: item.admin_access_id,
                },
              },
              created_by: admin_id,
              updated_by: admin_id,
            };
          }),
        },
      },
      include: {
        admin_role_accesses: {
          include: {
            admin_accesses: true,
          },
        },
      },
    });
  }

  async findAllLoginHistory({ skip, take }) {
    return this.prisma.admin_login_logs.findMany({
      skip,
      take,
      orderBy: {
        login_time: 'desc',
      },
      include: {
        admins: true,
      },
    });
  }

  async findAllAccess({ skip, take, where }) {
    return this.prisma.admin_role_accesses.findMany({
      skip,
      take,
      where,
    });
  }
}
