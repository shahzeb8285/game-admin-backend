import { Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';

@Injectable()
export class AgentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService
  ) { }


  async getRootParentId() {
    const agent = await this.prisma.agent.findFirst({
      where: {
        agent_name: "root"
      }, select: {
        agent_id: true
      }
    })

    return agent.agent_id;
  }
  async create(created_by: string, createAgentInput: CreateAgentInput) {
    const payload = {
      agent_name: createAgentInput.agent_name,
      agent_password: await this.passwordService.hashPassword(createAgentInput.agent_password),
      created_by
    }


    let parentAgentID = createAgentInput.parent_agent_id && createAgentInput.parent_agent_id
    if (!parentAgentID) {
      parentAgentID = await this.getRootParentId()
    }

    return this.prisma.agent.create({
      data: {
        ...payload,
        parent: {
          connect: {
            agent_id: parentAgentID
          }
        }
      },

    })
  }

  findAll({skip,take}) {
    return this.prisma.agent.findMany({
      skip,
      take,
      include: {
        parent: true
      }
    })
  }


  async update(agent_id: string, updateAgentInput: UpdateAgentInput) {
    const payload: any = {
      ...updateAgentInput

    }
    delete payload.agentID;
    if (updateAgentInput.agent_password) {
      payload.agentPassword = await this.passwordService.hashPassword(updateAgentInput.agent_password)
    }

    return this.prisma.agent.update({
      where: {
        agent_id
      },
      data: { ...payload }
    })
  }



  // getIncomeStatements() {
    
  // }

}
