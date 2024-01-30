import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { deposit_transactions } from '../deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { Admin_bank_accountsCount } from '../prisma/admin-bank-accounts-count.output';

@ObjectType()
export class admin_bank_accounts {

    @Field(() => ID, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => bank_method, {nullable:false})
    method!: keyof typeof bank_method;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [deposit_transactions], {nullable:true})
    deposit_transactions?: Array<deposit_transactions>;

    @Field(() => [withdrawal_transactions], {nullable:true})
    withdrawal_transactions?: Array<withdrawal_transactions>;

    @Field(() => Admin_bank_accountsCount, {nullable:false})
    _count?: Admin_bank_accountsCount;
}
