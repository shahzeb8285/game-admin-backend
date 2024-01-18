import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DepositTransaction } from '../deposit-transaction/deposit-transaction.model';
import { WithdrawalTransaction } from '../withdrawal-transaction/withdrawal-transaction.model';
import { AdminBankAccountCount } from './admin-bank-account-count.output';

@ObjectType()
export class AdminBankAccount {

    @Field(() => ID, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enabled!: boolean;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => [DepositTransaction], {nullable:true})
    deposit_transactions?: Array<DepositTransaction>;

    @Field(() => [WithdrawalTransaction], {nullable:true})
    withdrawal_transactions?: Array<WithdrawalTransaction>;

    @Field(() => AdminBankAccountCount, {nullable:false})
    _count?: AdminBankAccountCount;
}
