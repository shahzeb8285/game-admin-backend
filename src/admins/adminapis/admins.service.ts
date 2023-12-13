import { Injectable } from '@nestjs/common';
import { CreateAdminInput } from '../dto/create-admin.input';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../../auth/password.service';

@Injectable()
export class AdminsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService
  ) { }

  async create(createAdminInput: CreateAdminInput, created_by: string) {
    const hashedPassword = await this.passwordService.hashPassword(createAdminInput.admin_password);
    const payload = { ...createAdminInput };
    const adminRolesId = payload.admin_roles_id
    delete payload.admin_roles_id
    return this.prisma.admins.create({

      data: {
        ...payload,
        created_by,
        admin_name: payload.admin_name.toLowerCase(),
        admin_password: hashedPassword,
        admin_roles: {
          connect: {
            admin_role_id: adminRolesId.toString()
          }
        }

      }
    })
  }

  async findAll() {
    return this.prisma.admins.findMany({
      include: {
        admin_roles: {
          include: {
            role_accesses: true
          }
        }
      },
    });

  }


  async update(admin_id: string, updateAdminInput: UpdateAdminInput) {

    const updatePayload: any = {
      ...updateAdminInput
    }

    if (updatePayload.adminPassword) {
      updatePayload.adminPassword = await this.passwordService.hashPassword(updatePayload.adminPassword);
    }

    delete updatePayload.adminID

    return this.prisma.admins.update({
      where: {
        admin_id,
      },
      data: updatePayload

    })
  }


  async findAllLoginHistory() {
    return this.prisma.admin_login_logs.findMany({
      include: {
        admins: true
      }
    })
  }

}
