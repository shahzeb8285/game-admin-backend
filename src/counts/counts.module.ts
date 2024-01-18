import { Module } from '@nestjs/common';
import { CountsResolver } from './counts.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [CountsResolver, PrismaService]
})
export class CountsModule {}
