import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../@generated/prisma/date-time-filter.input';
import { Enumwallet_transaction_statusFilter } from '../../@generated/prisma/enumwallet-transaction-status-filter.input';

@InputType()
export class statsWhereInput {
  @Field(() => DateTimeFilter, { nullable: true })
  trans_date?: DateTimeFilter;
  @Field(() => DateTimeFilter, { nullable: true })
  reg_date?: DateTimeFilter;
  @Field(() => Enumwallet_transaction_statusFilter, { nullable: true })
  status?: Enumwallet_transaction_statusFilter;
}
