import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../@generated/prisma/date-time-filter.input';

@InputType()
export class statsWhereInput {
  @Field(() => DateTimeFilter, { nullable: true })
  trans_date?: DateTimeFilter;
  @Field(() => DateTimeFilter, { nullable: true })
  reg_date?: DateTimeFilter;
}
