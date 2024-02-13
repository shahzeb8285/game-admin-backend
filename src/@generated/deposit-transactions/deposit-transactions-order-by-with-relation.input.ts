import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';
import { admin_bank_accountsOrderByWithRelationInput } from '../admin-bank-accounts/admin-bank-accounts-order-by-with-relation.input';
import { adminsOrderByWithRelationInput } from '../admins/admins-order-by-with-relation.input';

@InputType()
export class deposit_transactionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    deposit_transaction_id?: keyof typeof SortOrder;

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
    admin_bank_account_id?: keyof typeof SortOrder;

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

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;

    @Field(() => admin_bank_accountsOrderByWithRelationInput, {nullable:true})
    admin_bank_account?: admin_bank_accountsOrderByWithRelationInput;

    @Field(() => adminsOrderByWithRelationInput, {nullable:true})
    processed_by_admin?: adminsOrderByWithRelationInput;
}
