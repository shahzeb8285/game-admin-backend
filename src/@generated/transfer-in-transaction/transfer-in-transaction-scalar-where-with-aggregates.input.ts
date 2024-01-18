import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTransactionTypeWithAggregatesFilter } from '../prisma/enum-transaction-type-with-aggregates-filter.input';

@InputType()
export class TransferInTransactionScalarWhereWithAggregatesInput {

    @Field(() => [TransferInTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransferInTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransferInTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransferInTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransferInTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransferInTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transfer_in_Transaction_id?: StringWithAggregatesFilter;

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
    counterpart_platform?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    counterpart_username?: StringWithAggregatesFilter;
}