import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
import { UpdateAgentShareInput } from './dto/get-agentshare.input';

@Injectable()
export class AgentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async updateAgentShare(createdBy:string,input: UpdateAgentShareInput) {
    const parent = await this.prisma.agents.findFirst({
      where: {
        agent_id: input.agentId,
      },
      select: {
        parent_agent_id: true,
      },
    });

    const parentShare = await this.getAgentShare(parent.parent_agent_id);

    if (!parentShare) {
      throw new BadRequestException('Parent does not have any share');
    }

    if (input.share > parentShare.shares) {
      throw new BadRequestException('Child Share Cant be more than parent');
    }

    const agentCurrentShare = await this.prisma.agent_shares.findFirst({
      where: {
        agent_id: input.agentId,
        is_active: true,
      },
      select: {
        agent_share_id: true,
      },
    });

    if (agentCurrentShare) {
      await this.prisma.agent_shares.update({
        data: {
          is_active: false,
        },
        where: {
          agent_share_id: agentCurrentShare.agent_share_id,
        },
      });
    }


    await this.prisma.agent_shares.create({
      data: {
        agent_id:input.agentId,
        shares: input.share,
        is_active: true,
        created_by:createdBy,
      }
    })

    return {
      message:"Success"
    }
  }

  getAgentShare(agentId: string) {
    return this.prisma.agent_shares.findFirst({
      where: {
        agent_id: agentId,
        is_active: true,
      },
      select: {
        shares: true,
      },
    });
  }
  async getRootParentId() {
    const agent = await this.prisma.agents.findFirst({
      where: {
        agent_name: 'root',
      },
      select: {
        agent_id: true,
      },
    });

    return agent.agent_id;
  }
  async create(created_by: string, createAgentInput: CreateAgentInput) {
    const payload = {
      agent_name: createAgentInput.agent_name,
      agent_password: await this.passwordService.hashPassword(
        createAgentInput.agent_password,
      ),
      created_by,
    };

    let parentAgentID =
      createAgentInput.parent_agent_id && createAgentInput.parent_agent_id;
    if (!parentAgentID) {
      parentAgentID = await this.getRootParentId();
    }

    return this.prisma.agents.create({
      data: {
        ...payload,
        parent: {
          connect: {
            agent_id: parentAgentID,
          },
        },
      },
    });
  }

  findAll({ skip, take, where, orderBy }) {
    return this.prisma.agents.findMany({
      skip,
      orderBy,
      take,
      where,
      include: {
        parent: true,
      },
    });
  }

  async update(agent_id: string, updateAgentInput: UpdateAgentInput) {
    const payload: any = {
      ...updateAgentInput,
    };
    delete payload.agentID;
    if (updateAgentInput.agent_password) {
      payload.agentPassword = await this.passwordService.hashPassword(
        updateAgentInput.agent_password,
      );
    }

    return this.prisma.agents.update({
      where: {
        agent_id,
      },
      data: { ...payload },
    });
  }

  // getIncomeStatements() {

  // }
}
