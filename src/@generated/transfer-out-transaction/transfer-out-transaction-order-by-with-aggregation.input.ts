import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransferOutTransactionCountOrderByAggregateInput } from './transfer-out-transaction-count-order-by-aggregate.input';
import { TransferOutTransactionAvgOrderByAggregateInput } from './transfer-out-transaction-avg-order-by-aggregate.input';
import { TransferOutTransactionMaxOrderByAggregateInput } from './transfer-out-transaction-max-order-by-aggregate.input';
import { TransferOutTransactionMinOrderByAggregateInput } from './transfer-out-transaction-min-order-by-aggregate.input';
import { TransferOutTransactionSumOrderByAggregateInput } from './transfer-out-transaction-sum-order-by-aggregate.input';

@InputType()
export class TransferOutTransactionOrderByWithAggregationInput {

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

    @Field(() => TransferOutTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: TransferOutTransactionCountOrderByAggregateInput;

    @Field(() => TransferOutTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TransferOutTransactionAvgOrderByAggregateInput;

    @Field(() => TransferOutTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: TransferOutTransactionMaxOrderByAggregateInput;

    @Field(() => TransferOutTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: TransferOutTransactionMinOrderByAggregateInput;

    @Field(() => TransferOutTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: TransferOutTransactionSumOrderByAggregateInput;
}
