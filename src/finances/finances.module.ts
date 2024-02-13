import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesResolver } from './finances.resolver';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule,],

  providers: [FinancesResolver, FinancesService,ConfigService]
})
export class FinancesModule {}
