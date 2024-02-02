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

  async getUsersGameHistory({ skip, take, where }) {
    const gameRecordRounds = await this.prisma.game_record_rounds.findMany({
      skip,
      take,
      where,
      orderBy: {
        game_date: 'desc',
      },
      include: {
        players: true,
      },
    });

    const gameRecordRoundsWithSgGames = await Promise.all(
      gameRecordRounds.map(async (record) => {
        // Check sg_games
        const sgGames = await this.prisma.sg_games.findFirst({
          where: {
            url: record.game_url,
            enabled: true,
          },
        });

        const findMerchant = await this.checkMerchantEnabled(
          sgGames.merchant_id,
        );
        return {
          ...record,
          sg_games: sgGames,
          sg_merchants: findMerchant,
        };
      }),
    );

    const gameRecordRoundsWithSgGamesAndCategories = await Promise.all(
      gameRecordRoundsWithSgGames.map(async (record) => {
        const findCategory = await this.checkCategoryEnabled(
          record.rebate_category_id,
        );

        return {
          ...record,
          fl_categories: findCategory,
        };
      }),
    );

    return gameRecordRoundsWithSgGamesAndCategories;
  }

  async checkMerchantEnabled(merchantId: number) {
    const merchant = await this.prisma.sg_merchants.findFirst({
      where: {
        merchant_id: merchantId,
        enabled: true,
      },
    });

    return merchant;
  }

  async checkCategoryEnabled(categoryId: number) {
    const category = await this.prisma.fl_categories.findFirst({
      where: {
        category_id: categoryId,
        enabled: true,
      },
    });

    return category;
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
      include: {
        players: true,
        admins: true,
      },
    });
  }
}
