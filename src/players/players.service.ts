import { Injectable } from '@nestjs/common';
import { UpdatePlayerInput } from './dto/update-player.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';

@Injectable()
export class PlayersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }



  findAll() {
    return this.prisma.players.findMany({
      include: {
        agent: true
      }
    })
  }


  getUserLoginHistory() {
    return this.prisma.player_login_logs.findMany({
      include: {
        players: true
      }
    })
  }



  getManualAdjustments() {
    return this.prisma.manual_adjustments.findMany({
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
