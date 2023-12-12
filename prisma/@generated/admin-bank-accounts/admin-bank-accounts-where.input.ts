import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';

@InputType()
export class admin_bank_accountsWhereInput {

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    AND?: Array<admin_bank_accountsWhereInput>;

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    OR?: Array<admin_bank_accountsWhereInput>;

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    NOT?: Array<admin_bank_accountsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_bank_account_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bank_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    account_number?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    holder_name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;
}
