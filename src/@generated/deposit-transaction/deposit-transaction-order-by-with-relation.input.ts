import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerOrderByWithRelationInput } from '../player/player-order-by-with-relation.input';
import { AdminBankAccountOrderByWithRelationInput } from '../admin-bank-account/admin-bank-account-order-by-with-relation.input';

@InputType()
export class DepositTransactionOrderByWithRelationInput {

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

    @Field(() => PlayerOrderByWithRelationInput, {nullable:true})
    players?: PlayerOrderByWithRelationInput;

    @Field(() => AdminBankAccountOrderByWithRelationInput, {nullable:true})
    admin_bank_accounts?: AdminBankAccountOrderByWithRelationInput;
}
