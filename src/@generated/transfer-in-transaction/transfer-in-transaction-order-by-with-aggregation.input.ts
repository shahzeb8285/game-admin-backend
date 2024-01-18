import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransferInTransactionCountOrderByAggregateInput } from './transfer-in-transaction-count-order-by-aggregate.input';
import { TransferInTransactionAvgOrderByAggregateInput } from './transfer-in-transaction-avg-order-by-aggregate.input';
import { TransferInTransactionMaxOrderByAggregateInput } from './transfer-in-transaction-max-order-by-aggregate.input';
import { TransferInTransactionMinOrderByAggregateInput } from './transfer-in-transaction-min-order-by-aggregate.input';
import { TransferInTransactionSumOrderByAggregateInput } from './transfer-in-transaction-sum-order-by-aggregate.input';

@InputType()
export class TransferInTransactionOrderByWithAggregationInput {

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

    @Field(() => TransferInTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: TransferInTransactionCountOrderByAggregateInput;

    @Field(() => TransferInTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TransferInTransactionAvgOrderByAggregateInput;

    @Field(() => TransferInTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: TransferInTransactionMaxOrderByAggregateInput;

    @Field(() => TransferInTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: TransferInTransactionMinOrderByAggregateInput;

    @Field(() => TransferInTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: TransferInTransactionSumOrderByAggregateInput;
}
