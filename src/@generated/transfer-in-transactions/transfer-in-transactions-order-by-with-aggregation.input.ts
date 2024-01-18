import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { transfer_in_transactionsCountOrderByAggregateInput } from './transfer-in-transactions-count-order-by-aggregate.input';
import { transfer_in_transactionsAvgOrderByAggregateInput } from './transfer-in-transactions-avg-order-by-aggregate.input';
import { transfer_in_transactionsMaxOrderByAggregateInput } from './transfer-in-transactions-max-order-by-aggregate.input';
import { transfer_in_transactionsMinOrderByAggregateInput } from './transfer-in-transactions-min-order-by-aggregate.input';
import { transfer_in_transactionsSumOrderByAggregateInput } from './transfer-in-transactions-sum-order-by-aggregate.input';

@InputType()
export class transfer_in_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    transfer_in_Transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    process_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processed_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    counterpart_platform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    counterpart_username?: keyof typeof SortOrder;

    @Field(() => transfer_in_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: transfer_in_transactionsCountOrderByAggregateInput;

    @Field(() => transfer_in_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: transfer_in_transactionsAvgOrderByAggregateInput;

    @Field(() => transfer_in_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: transfer_in_transactionsMaxOrderByAggregateInput;

    @Field(() => transfer_in_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: transfer_in_transactionsMinOrderByAggregateInput;

    @Field(() => transfer_in_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: transfer_in_transactionsSumOrderByAggregateInput;
}
