import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class rebate_transactionsScalarWhereInput {

    @Field(() => [rebate_transactionsScalarWhereInput], {nullable:true})
    AND?: Array<rebate_transactionsScalarWhereInput>;

    @Field(() => [rebate_transactionsScalarWhereInput], {nullable:true})
    OR?: Array<rebate_transactionsScalarWhereInput>;

    @Field(() => [rebate_transactionsScalarWhereInput], {nullable:true})
    NOT?: Array<rebate_transactionsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    rebate_transaction_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bonus_type?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    trans_date?: DateTimeFilter;
}
