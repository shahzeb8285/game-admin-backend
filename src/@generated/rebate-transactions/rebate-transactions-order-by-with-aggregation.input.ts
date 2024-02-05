import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { rebate_transactionsCountOrderByAggregateInput } from './rebate-transactions-count-order-by-aggregate.input';
import { rebate_transactionsAvgOrderByAggregateInput } from './rebate-transactions-avg-order-by-aggregate.input';
import { rebate_transactionsMaxOrderByAggregateInput } from './rebate-transactions-max-order-by-aggregate.input';
import { rebate_transactionsMinOrderByAggregateInput } from './rebate-transactions-min-order-by-aggregate.input';
import { rebate_transactionsSumOrderByAggregateInput } from './rebate-transactions-sum-order-by-aggregate.input';

@InputType()
export class rebate_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    rebate_transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    bonus_type?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => rebate_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: rebate_transactionsCountOrderByAggregateInput;

    @Field(() => rebate_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: rebate_transactionsAvgOrderByAggregateInput;

    @Field(() => rebate_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: rebate_transactionsMaxOrderByAggregateInput;

    @Field(() => rebate_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: rebate_transactionsMinOrderByAggregateInput;

    @Field(() => rebate_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: rebate_transactionsSumOrderByAggregateInput;
}
