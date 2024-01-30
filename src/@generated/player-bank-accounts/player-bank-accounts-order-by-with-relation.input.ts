import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';

@InputType()
export class player_bank_accountsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    holder_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => withdrawal_transactionsOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsOrderByRelationAggregateInput;
}
