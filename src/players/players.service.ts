import { Injectable } from '@nestjs/common';
import { UpdatePlayerInput } from './dto/update-player.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';

@Injectable()
export class PlayersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }



  findAll({skip,take}) {
    return this.prisma.players.findMany({
      skip,take,
      include: {
        agent: true
      }
    })
  }


  getUserLoginHistory({ skip, take }) {
    
    return this.prisma.player_login_logs.findMany({
      skip,take,
      include: {
        players: true
      }
    })
  }



  getManualAdjustments({skip,take}) {
    return this.prisma.manual_adjustments.findMany({
      skip,take,
      include: {
        players: true
      }
    })
  }


  changePlayerStatus(data: UpdatePlayerInput) {
    return this.prisma.players.update({
      where: {
        player_id: data.user_id
      },
      data: {
        enabled: data.enabled

      },
      include: {
        agent: true
      }
    })
  }



  createManualAdjustment(createdBy: string, data: CreateManualAdjustment) {
    const payload: any = {
      ...data,
    }

    delete payload.playerID;

    return this.prisma.manual_adjustments.create({
      data: {
        ...payload,
        admins: {
          connect: {
            adminID: createdBy
          }
        },
        players: {
          connect: {
            playerID: data.player_id
          }
        }
      }
    })
  }

}
