import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WithdrawalTransactionCountOrderByAggregateInput } from './withdrawal-transaction-count-order-by-aggregate.input';
import { WithdrawalTransactionAvgOrderByAggregateInput } from './withdrawal-transaction-avg-order-by-aggregate.input';
import { WithdrawalTransactionMaxOrderByAggregateInput } from './withdrawal-transaction-max-order-by-aggregate.input';
import { WithdrawalTransactionMinOrderByAggregateInput } from './withdrawal-transaction-min-order-by-aggregate.input';
import { WithdrawalTransactionSumOrderByAggregateInput } from './withdrawal-transaction-sum-order-by-aggregate.input';

@InputType()
export class WithdrawalTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    withdrawal_transaction_id?: keyof typeof SortOrder;

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

    @Field(() => WithdrawalTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: WithdrawalTransactionCountOrderByAggregateInput;

    @Field(() => WithdrawalTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: WithdrawalTransactionAvgOrderByAggregateInput;

    @Field(() => WithdrawalTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: WithdrawalTransactionMaxOrderByAggregateInput;

    @Field(() => WithdrawalTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: WithdrawalTransactionMinOrderByAggregateInput;

    @Field(() => WithdrawalTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: WithdrawalTransactionSumOrderByAggregateInput;
}
