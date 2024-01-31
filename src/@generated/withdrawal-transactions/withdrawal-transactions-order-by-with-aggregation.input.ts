import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { withdrawal_transactionsCountOrderByAggregateInput } from './withdrawal-transactions-count-order-by-aggregate.input';
import { withdrawal_transactionsAvgOrderByAggregateInput } from './withdrawal-transactions-avg-order-by-aggregate.input';
import { withdrawal_transactionsMaxOrderByAggregateInput } from './withdrawal-transactions-max-order-by-aggregate.input';
import { withdrawal_transactionsMinOrderByAggregateInput } from './withdrawal-transactions-min-order-by-aggregate.input';
import { withdrawal_transactionsSumOrderByAggregateInput } from './withdrawal-transactions-sum-order-by-aggregate.input';

@InputType()
export class withdrawal_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    withdrawal_transaction_id?: keyof typeof SortOrder;

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
    player_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_remarks?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    comment?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    processed_by?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    process_time?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => withdrawal_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: withdrawal_transactionsCountOrderByAggregateInput;

    @Field(() => withdrawal_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: withdrawal_transactionsAvgOrderByAggregateInput;

    @Field(() => withdrawal_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: withdrawal_transactionsMaxOrderByAggregateInput;

    @Field(() => withdrawal_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: withdrawal_transactionsMinOrderByAggregateInput;

    @Field(() => withdrawal_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: withdrawal_transactionsSumOrderByAggregateInput;
}
