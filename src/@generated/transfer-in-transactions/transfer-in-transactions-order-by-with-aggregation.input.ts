import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { transfer_in_transactionsCountOrderByAggregateInput } from './transfer-in-transactions-count-order-by-aggregate.input';
import { transfer_in_transactionsAvgOrderByAggregateInput } from './transfer-in-transactions-avg-order-by-aggregate.input';
import { transfer_in_transactionsMaxOrderByAggregateInput } from './transfer-in-transactions-max-order-by-aggregate.input';
import { transfer_in_transactionsMinOrderByAggregateInput } from './transfer-in-transactions-min-order-by-aggregate.input';
import { transfer_in_transactionsSumOrderByAggregateInput } from './transfer-in-transactions-sum-order-by-aggregate.input';

@InputType()
export class transfer_in_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    transfer_in_transaction_id?: keyof typeof SortOrder;

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
    counterpart_platform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    counterpart_username?: keyof typeof SortOrder;

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
