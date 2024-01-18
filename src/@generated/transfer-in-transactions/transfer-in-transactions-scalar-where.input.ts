import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';

@InputType()
export class transfer_in_transactionsScalarWhereInput {

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    AND?: Array<transfer_in_transactionsScalarWhereInput>;

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    OR?: Array<transfer_in_transactionsScalarWhereInput>;

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    NOT?: Array<transfer_in_transactionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    transfer_in_Transaction_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    request_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    process_time?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    processed_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    status?: EnumTransactionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_platform?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_username?: StringFilter;
}
