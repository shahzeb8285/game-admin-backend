import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsResolver } from './agents.resolver';
import { PasswordService } from '../auth/password.service';

@Module({
  providers: [AgentsResolver, AgentsService, PasswordService],
})
export class AgentsModule {}
