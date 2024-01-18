import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTransactionTypeWithAggregatesFilter } from '../prisma/enum-transaction-type-with-aggregates-filter.input';

@InputType()
export class deposit_transactionsScalarWhereWithAggregatesInput {

    @Field(() => [deposit_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<deposit_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [deposit_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<deposit_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [deposit_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<deposit_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    deposit_transaction_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    request_time?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    process_time?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    processed_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_date?: StringWithAggregatesFilter;

    @Field(() => EnumTransactionTypeWithAggregatesFilter, {nullable:true})
    status?: EnumTransactionTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_bank_account_id_r?: StringWithAggregatesFilter;
}
