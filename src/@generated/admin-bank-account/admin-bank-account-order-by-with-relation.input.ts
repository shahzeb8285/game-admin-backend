import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DepositTransactionOrderByRelationAggregateInput } from '../deposit-transaction/deposit-transaction-order-by-relation-aggregate.input';
import { WithdrawalTransactionOrderByRelationAggregateInput } from '../withdrawal-transaction/withdrawal-transaction-order-by-relation-aggregate.input';

@InputType()
export class AdminBankAccountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    holder_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => DepositTransactionOrderByRelationAggregateInput, {nullable:true})
    deposit_transactions?: DepositTransactionOrderByRelationAggregateInput;

    @Field(() => WithdrawalTransactionOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionOrderByRelationAggregateInput;
}
