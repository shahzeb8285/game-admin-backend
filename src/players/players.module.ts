import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersResolver } from './players.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],

  providers: [PlayersResolver, PlayersService]
})
export class PlayersModule {}
