import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { transfer_out_transactionsCountOrderByAggregateInput } from './transfer-out-transactions-count-order-by-aggregate.input';
import { transfer_out_transactionsAvgOrderByAggregateInput } from './transfer-out-transactions-avg-order-by-aggregate.input';
import { transfer_out_transactionsMaxOrderByAggregateInput } from './transfer-out-transactions-max-order-by-aggregate.input';
import { transfer_out_transactionsMinOrderByAggregateInput } from './transfer-out-transactions-min-order-by-aggregate.input';
import { transfer_out_transactionsSumOrderByAggregateInput } from './transfer-out-transactions-sum-order-by-aggregate.input';

@InputType()
export class transfer_out_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    transfer_out_transaction_id?: keyof typeof SortOrder;

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

    @Field(() => transfer_out_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: transfer_out_transactionsCountOrderByAggregateInput;

    @Field(() => transfer_out_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: transfer_out_transactionsAvgOrderByAggregateInput;

    @Field(() => transfer_out_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: transfer_out_transactionsMaxOrderByAggregateInput;

    @Field(() => transfer_out_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: transfer_out_transactionsMinOrderByAggregateInput;

    @Field(() => transfer_out_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: transfer_out_transactionsSumOrderByAggregateInput;
}
