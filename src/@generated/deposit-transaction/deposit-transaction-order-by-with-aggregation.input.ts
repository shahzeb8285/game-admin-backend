import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DepositTransactionCountOrderByAggregateInput } from './deposit-transaction-count-order-by-aggregate.input';
import { DepositTransactionAvgOrderByAggregateInput } from './deposit-transaction-avg-order-by-aggregate.input';
import { DepositTransactionMaxOrderByAggregateInput } from './deposit-transaction-max-order-by-aggregate.input';
import { DepositTransactionMinOrderByAggregateInput } from './deposit-transaction-min-order-by-aggregate.input';
import { DepositTransactionSumOrderByAggregateInput } from './deposit-transaction-sum-order-by-aggregate.input';

@InputType()
export class DepositTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    deposit_transaction_id?: keyof typeof SortOrder;

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
    admin_bank_account_id_r?: keyof typeof SortOrder;

    @Field(() => DepositTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: DepositTransactionCountOrderByAggregateInput;

    @Field(() => DepositTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DepositTransactionAvgOrderByAggregateInput;

    @Field(() => DepositTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: DepositTransactionMaxOrderByAggregateInput;

    @Field(() => DepositTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: DepositTransactionMinOrderByAggregateInput;

    @Field(() => DepositTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: DepositTransactionSumOrderByAggregateInput;
}
