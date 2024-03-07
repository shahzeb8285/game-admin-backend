import { Injectable } from '@nestjs/common';
import { UpdatePlayerInput } from './dto/update-player.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';
import { GameRecordRoundsWhereInput } from './entities/game-record-rounds-where.input';
import { Prisma } from '@prisma/client';
import moment from 'moment';
import { HttpService } from '@nestjs/axios';
import { AppConfig } from 'src/common/configs/config.interface';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { deposit_transactionsWhereInput } from 'src/@generated/deposit-transactions/deposit-transactions-where.input';

@Injectable()
export class PlayersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  findAll({ skip, take, where, orderBy }) {
    return this.prisma.players.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        agent: true,
        wallet: true,
      },
    });
  }

  findAllUserBonusHistory({ skip, take, where, orderBy }) {
    return this.prisma.rebate_transactions.findMany({
      skip,
      take,
      where,
      orderBy,

      include: {
        player: true,
      },
    });
  }

  getUserLoginHistory({ skip, take, where, orderBy }) {
    return this.prisma.player_login_logs.findMany({
      skip,
      take,
      orderBy,

      where,

      include: {
        players: true,
      },
    });
  }

  async getDepositStats({ where }) {
    const result = await this.prisma.deposit_transactions.groupBy({
      by: ['trans_date'],
      _count: {
        trans_date: true,
      },
      where: {
        ...where,
        status: 'SUCCESS',
      },
    });

    return result.map(({ trans_date, _count }) => ({
      trans_date,
      sum: _count.trans_date,
    }));
  }

  async getWithdrawalStats({ where }) {
    const result = await this.prisma.withdrawal_transactions.groupBy({
      by: ['trans_date'],
      _count: {
        trans_date: true,
      },
      where: {
        ...where,
        status: 'SUCCESS',
      },
    });

    return result.map(({ trans_date, _count }) => ({
      trans_date,
      sum: _count.trans_date,
    }));
  }

  async getBonusStats({ where }) {
    const result = await this.prisma.rebate_transactions.groupBy({
      by: ['trans_date'],
      _count: {
        trans_date: true,
      },
      where,
    });

    return result.map(({ trans_date, _count }) => ({
      trans_date,
      sum: _count.trans_date,
    }));
  }

  async findAllUserGameHistory({ skip, take, where }) {
    const whereQueryInput: GameRecordRoundsWhereInput = where;

    let whereQuery = '';
    if (whereQueryInput) {
      whereQuery = '';
      if (whereQueryInput.tg_id) {
        whereQuery += ` AND LOWER(pl.tg_id) LIKE '%${whereQueryInput.tg_id.toLowerCase()}%'`;
      }
      if (whereQueryInput.game_round_info_id) {
        whereQuery += ` AND LOWER(grr.game_round_info_id) LIKE '%${whereQueryInput.game_round_info_id.toLowerCase()}%'`;
      }
      if (whereQueryInput.merchant_name) {
        whereQuery += ` AND LOWER(sm.merchant_name) LIKE '%${whereQueryInput.merchant_name.toLowerCase()}%'`;
      }
      if (whereQueryInput.game_category) {
        whereQuery += ` AND LOWER(fc.category_name) LIKE '%${whereQueryInput.game_category.toLowerCase()}%'`;
      }

      if (whereQueryInput.game_name) {
        whereQuery += ` AND LOWER(sg.game_name) LIKE '%${whereQueryInput.game_name.toLowerCase()}%'`;
      }

      if (whereQueryInput.cdate) {
        if (whereQueryInput.cdate.gte) {
          const timestamp = moment(whereQueryInput.cdate.gte)
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND gri.cdate >= '${timestamp}'`;
          //from
        }

        if (whereQueryInput.cdate.lte) {
          //to
          const timestamp = moment(whereQueryInput.cdate.lte)
            .set({ hour: 23, minute: 59, second: 59 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND gri.cdate <= '${timestamp}'`;
        }
      }
    }

    const query1 = `SELECT grr.game_round_info_id, grr.player_id, pl.tg_id, sm.merchant_name, fc.category_name, sg.game_name, 
    grr.bet_amount, grr.effective_bet_amount, grr.payout, grr.is_processed, gri.cdate
    FROM game_record_rounds grr 
    JOIN players pl ON pl.player_id = grr.player_id  
    JOIN sg_games sg ON grr.game_url = sg.url AND sg.enabled = true 
    JOIN sg_merchants sm ON sm.merchant_id = sg.merchant_id AND sm.enabled = true
    JOIN fl_categories fc ON fc.category_id = grr.rebate_category_id AND fc.enabled = true
    JOIN game_round_infos gri ON gri.game_round_info_id = grr.game_round_info_id
    WHERE 1=1 ${whereQuery} OFFSET ${skip} ROWS FETCH NEXT ${take} ROWS ONLY;`;

    const result = await this.prisma.$queryRawUnsafe(query1);

    return result;
  }

  async getDepositAmount({ where }) {
    const whereQueryInput: deposit_transactionsWhereInput = where;
    let whereQuery = '';
    if (whereQueryInput) {
      whereQuery = '';

      if (whereQueryInput.trans_date) {
        if (whereQueryInput.trans_date.gte) {
          const timestamp = moment(whereQueryInput.trans_date.gte)
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND dt.trans_date >= '${timestamp}'`;
          //from
        }

        if (whereQueryInput.trans_date.lte) {
          //to
          const timestamp = moment(whereQueryInput.trans_date.lte)
            .set({ hour: 23, minute: 59, second: 59 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND dt.trans_date <= '${timestamp}'`;
        }
      }
    }
    // ?241650
    const query1 = `
    SELECT trans_date, SUM(transaction_amount) 
    FROM deposit_transactions dt 
    WHERE 1=1 AND status = 'SUCCESS' ${whereQuery}  GROUP BY trans_date`;

    const result = await this.prisma.$queryRawUnsafe(query1);
    return result;
  }

  async getWithdrawalAmount({ where }) {
    const whereQueryInput: deposit_transactionsWhereInput = where;
    let whereQuery = '';
    if (whereQueryInput) {
      whereQuery = '';

      if (whereQueryInput.trans_date) {
        if (whereQueryInput.trans_date.gte) {
          const timestamp = moment(whereQueryInput.trans_date.gte)
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND wt.trans_date >= '${timestamp}'`;
          //from
        }

        if (whereQueryInput.trans_date.lte) {
          //to
          const timestamp = moment(whereQueryInput.trans_date.lte)
            .set({ hour: 23, minute: 59, second: 59 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND wt.trans_date <= '${timestamp}'`;
        }
      }
    }

    const query1 = `
    SELECT trans_date, SUM(transaction_amount) 
    FROM withdrawal_transactions wt 
    WHERE 1=1 AND status = 'SUCCESS' ${whereQuery}  GROUP BY trans_date;`;

    const result = await this.prisma.$queryRawUnsafe(query1);
    return result;
  }

  async getBonusAmount({ where }) {
    const whereQueryInput: deposit_transactionsWhereInput = where;
    let whereQuery = '';
    if (whereQueryInput) {
      whereQuery = '';

      if (whereQueryInput.trans_date) {
        if (whereQueryInput.trans_date.gte) {
          const timestamp = moment(whereQueryInput.trans_date.gte)
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND rt.trans_date >= '${timestamp}'`;
          //from
        }

        if (whereQueryInput.trans_date.lte) {
          //to
          const timestamp = moment(whereQueryInput.trans_date.lte)
            .set({ hour: 23, minute: 59, second: 59 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND rt.trans_date <= '${timestamp}'`;
        }
      }
    }

    const query1 = `
    SELECT trans_date, SUM(amount) 
    FROM rebate_transactions rt 
    WHERE 1=1 ${whereQuery}  GROUP BY trans_date;`;

    const result = await this.prisma.$queryRawUnsafe(query1);
    return result;
  }

  getManualAdjustments({ skip, take, where, orderBy }) {
    return this.prisma.manual_adjustments.findMany({
      skip,
      take,
      where,
      orderBy,
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

  async createManualAdjustment(
    createdBy: string,
    data: CreateManualAdjustment,
  ) {
    const payload = {
      userId: data.player_id,
      reason: data.reason,
      amount: data.amount,
      adjustmentBy: createdBy,
    };

    const securityConfig = this.configService.get<AppConfig>('appConfig');

    const req = this.httpService.post(
      `${securityConfig.externalApiPath}/manualAdjustment`,
      payload,
    );
    const resp = await firstValueFrom(req);
    return { message: resp.data };

    // return this.prisma.manual_adjustments.create({
    //   include: {
    //     players: true,
    //     admins: true,
    //   },
    //   data: {
    //     ...payload,
    //     admins: {
    //       connect: {
    //         admin_id: createdBy,
    //       },
    //     },
    //     players: {
    //       connect: {
    //         player_id: data.player_id,
    //       },
    //     },
    //   },
    // });
  }
}
