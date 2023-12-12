import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesResolver } from './finances.resolver';

@Module({
  providers: [FinancesResolver, FinancesService]
})
export class FinancesModule {}
