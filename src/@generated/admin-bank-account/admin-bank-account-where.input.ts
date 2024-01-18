import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DepositTransactionListRelationFilter } from '../deposit-transaction/deposit-transaction-list-relation-filter.input';
import { WithdrawalTransactionListRelationFilter } from '../withdrawal-transaction/withdrawal-transaction-list-relation-filter.input';

@InputType()
export class AdminBankAccountWhereInput {

    @Field(() => [AdminBankAccountWhereInput], {nullable:true})
    AND?: Array<AdminBankAccountWhereInput>;

    @Field(() => [AdminBankAccountWhereInput], {nullable:true})
    OR?: Array<AdminBankAccountWhereInput>;

    @Field(() => [AdminBankAccountWhereInput], {nullable:true})
    NOT?: Array<AdminBankAccountWhereInput>;

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

    @Field(() => DepositTransactionListRelationFilter, {nullable:true})
    deposit_transactions?: DepositTransactionListRelationFilter;

    @Field(() => WithdrawalTransactionListRelationFilter, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionListRelationFilter;
}
