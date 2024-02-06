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

  findAllUserBonusHistory({ skip, take, where }) {
    return this.prisma.rebate_transactions.findMany({
      skip,
      take,
      where,
      orderBy: {
        cdate: 'desc',
      },
      include: {
        player: true,
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

  findAllUserGameHistory({ skip, take, where }) {
    return this.prisma.game_record_rounds.findMany({
      skip,
      take,
      where,
      orderBy: {
        game_date: 'desc',
      },

      // include: {

      //   player: true,
      //   category:true,
      //   game_round: true,
      //   game:true
      // },

      select: {
        game_round_info_id: true,

        player: {
          select: {
            tg_id: true,
          },
        },

        category: {
          select: {
            category_name: true,
            enabled: true,
          },
        },
        bet_amount: true,
        payout: true,
        effective_bet_amount: true,
        is_processed: true,
        game_round: {
          select: {
            cdate: true,
          },
        },

        // game: {

        //   select: {
        //     enabled: true,
        //     game_name: true,
        //     // merchant: {
        //     //   select: {
        //     //     enabled: true,
        //     //     merchant_name: true
        //     //   }
        //     // }
        //   }
        // }
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
        admins: true,
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
      include: {
        players: true,
        admins:true
      },
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
