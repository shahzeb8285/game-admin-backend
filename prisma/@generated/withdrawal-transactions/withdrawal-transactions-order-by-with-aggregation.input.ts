import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
