import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_rolesOrderByWithRelationInput } from '../admin-roles/admin-roles-order-by-with-relation.input';
import { admin_login_logsOrderByRelationAggregateInput } from '../admin-login-logs/admin-login-logs-order-by-relation-aggregate.input';
import { manual_adjustmentsOrderByRelationAggregateInput } from '../manual-adjustments/manual-adjustments-order-by-relation-aggregate.input';
import { transfer_out_transactionsOrderByRelationAggregateInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-relation-aggregate.input';
import { transfer_in_transactionsOrderByRelationAggregateInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-relation-aggregate.input';
import { deposit_transactionsOrderByRelationAggregateInput } from '../deposit-transactions/deposit-transactions-order-by-relation-aggregate.input';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';

@InputType()
export class adminsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => admin_rolesOrderByWithRelationInput, {nullable:true})
    admin_roles?: admin_rolesOrderByWithRelationInput;

    @Field(() => admin_login_logsOrderByRelationAggregateInput, {nullable:true})
    admin_login_logs?: admin_login_logsOrderByRelationAggregateInput;

    @Field(() => manual_adjustmentsOrderByRelationAggregateInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsOrderByRelationAggregateInput;

    @Field(() => transfer_out_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsOrderByRelationAggregateInput;

    @Field(() => transfer_in_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsOrderByRelationAggregateInput;

    @Field(() => deposit_transactionsOrderByRelationAggregateInput, {nullable:true})
    deposit_transactions?: deposit_transactionsOrderByRelationAggregateInput;

    @Field(() => withdrawal_transactionsOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsOrderByRelationAggregateInput;
}
