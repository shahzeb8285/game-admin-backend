// agent-auth.service.ts
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { Token } from 'src/auth/models/token.model';
import { PasswordService } from 'src/auth/password.service';

@Injectable()
export class AgentAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async agentLogin(agentName: string, password: string): Promise<Token> {
    const agent = await this.prisma.agents.findUnique({
      where: { agent_name: agentName },
    });

    if (!agent) {
      throw new NotFoundException(`No Agent found for agentName: ${agentName}`);
    }

    const hashedPasswordValid = await this.passwordService.validatePassword(
      password,
      agent.agent_password,
    );
    const passwordValid = await (password === agent.agent_password);

    if (!passwordValid && !hashedPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    if (!agent.enabled) {
      throw new BadRequestException('Agent Not Enabled');
    }

    return this.generateTokens({
      agentId: agent.agent_id,
    });
  }

  private generateTokens(payload: { agentId: string }): Token {
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload),
    };
  }

  async validateAgent(agentId: string) {
    return this.prisma.agents.findUnique({
      where: { agent_id: agentId },
    });
  }

  findAllMyAgents({ skip, take, where, orderBy, user }) {
    return this.prisma.agents.findMany({
      skip,
      orderBy,
      take,
      where: {
        ...where,
        parent_agent_id: {
          equals: user.agent_id,
        },
      },
      include: {
        parent: true,
      },
    });
  }
  findAllMyPlayers({ skip, take, where, orderBy, user }) {
    return this.prisma.players.findMany({
      skip,
      orderBy,
      take,
      where: {
        ...where,
        agent_id: {
          equals: user.agent_id,
        },
      },
    });
  }
}
