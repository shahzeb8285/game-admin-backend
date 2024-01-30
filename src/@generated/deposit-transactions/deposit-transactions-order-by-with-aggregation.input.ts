import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { deposit_transactionsCountOrderByAggregateInput } from './deposit-transactions-count-order-by-aggregate.input';
import { deposit_transactionsAvgOrderByAggregateInput } from './deposit-transactions-avg-order-by-aggregate.input';
import { deposit_transactionsMaxOrderByAggregateInput } from './deposit-transactions-max-order-by-aggregate.input';
import { deposit_transactionsMinOrderByAggregateInput } from './deposit-transactions-min-order-by-aggregate.input';
import { deposit_transactionsSumOrderByAggregateInput } from './deposit-transactions-sum-order-by-aggregate.input';

@InputType()
export class deposit_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    deposit_transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_remarks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processed_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    process_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => deposit_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: deposit_transactionsCountOrderByAggregateInput;

    @Field(() => deposit_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: deposit_transactionsAvgOrderByAggregateInput;

    @Field(() => deposit_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: deposit_transactionsMaxOrderByAggregateInput;

    @Field(() => deposit_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: deposit_transactionsMinOrderByAggregateInput;

    @Field(() => deposit_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: deposit_transactionsSumOrderByAggregateInput;
}
