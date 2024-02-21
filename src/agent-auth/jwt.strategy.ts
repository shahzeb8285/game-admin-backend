import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { Admins } from '@prisma/client';
import { AgentAuthService } from './agent-auth.service';
import { agents } from '@prisma/client';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly agentAuthService: AgentAuthService,
    readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: JwtDto): Promise<agents> {
    const user = await this.agentAuthService.validateAgent(payload.agentId);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
