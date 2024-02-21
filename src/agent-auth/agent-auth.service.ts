// agent-auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { Token } from 'src/auth/models/token.model';
// import { PasswordService } from 'src/auth/password.service';

@Injectable()
export class AgentAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async agentLogin(agentName: string, password: string): Promise<Token> {
    const agent = await this.prisma.agents.findUnique({
      where: { agent_name: agentName },
    });

    if (!agent || !(password === agent.agent_password)) {
      throw new UnauthorizedException('Invalid agent credentials');
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

  async getAgentById(agentId: string) {
    return this.prisma.agents.findUnique({
      where: { agent_id: agentId },
    });
  }
}
