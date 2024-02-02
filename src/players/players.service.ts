import { Injectable } from '@nestjs/common';
import { UpdatePlayerInput } from './dto/update-player.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll({ skip, take, where }) {
    return this.prisma.players.findMany({
      skip,
      take,
      where,
      orderBy: {
        cdate: 'desc',
      },
      include: {
        agent: true,
      },
    });
  }

  getUserLoginHistory({ skip, take, where }) {
    return this.prisma.player_login_logs.findMany({
      skip,
      take,
      where,
      orderBy: {
        login_time: 'desc',
      },
      include: {
        players: true,
      },
    });
  }

  getManualAdjustments({ skip, take, where }) {
    return this.prisma.manual_adjustments.findMany({
      skip,
      take,

      where,
      orderBy: {
        cdate: 'desc',
      },
      include: {
        players: true,
      },
    });
  }

  changePlayerStatus(data: UpdatePlayerInput) {
    return this.prisma.players.update({
      where: {
        player_id: data.user_id,
      },
      data: {
        enabled: data.enabled,
      },
      include: {
        agent: true,
      },
    });
  }

  createManualAdjustment(createdBy: string, data: CreateManualAdjustment) {
    const payload: any = {
      ...data,
    };

    delete payload.player_id;

    return this.prisma.manual_adjustments.create({
      data: {
        ...payload,
        admins: {
          connect: {
            admin_id: createdBy,
          },
        },
        players: {
          connect: {
            player_id: data.player_id,
          },
        },
      },
    });
  }
}
