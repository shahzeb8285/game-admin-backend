import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';
import { player_bank_accountsOrderByWithRelationInput } from '../player-bank-accounts/player-bank-accounts-order-by-with-relation.input';
import { admin_bank_accountsOrderByWithRelationInput } from '../admin-bank-accounts/admin-bank-accounts-order-by-with-relation.input';

@InputType()
export class withdrawal_transactionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    withdrawal_transaction_id?: keyof typeof SortOrder;

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
    player_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_remarks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processed_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    process_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    admin_bank_accountsAdmin_bank_account_id?: SortOrderInput;

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;

    @Field(() => player_bank_accountsOrderByWithRelationInput, {nullable:true})
    player_bank_account?: player_bank_accountsOrderByWithRelationInput;

    @Field(() => admin_bank_accountsOrderByWithRelationInput, {nullable:true})
    admin_bank_accounts?: admin_bank_accountsOrderByWithRelationInput;
}
