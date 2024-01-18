import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsWhereInput } from '../admin-bank-accounts/admin-bank-accounts-where.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsOrderByWithAggregationInput } from '../admin-bank-accounts/admin-bank-accounts-order-by-with-aggregation.input';
import { Admin_bank_accountsScalarFieldEnum } from './admin-bank-accounts-scalar-field.enum';
import { admin_bank_accountsScalarWhereWithAggregatesInput } from '../admin-bank-accounts/admin-bank-accounts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByadminBankAccountsArgs {

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;

    @Field(() => [admin_bank_accountsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<admin_bank_accountsOrderByWithAggregationInput>;

    @Field(() => [Admin_bank_accountsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Admin_bank_accountsScalarFieldEnum>;

    @Field(() => admin_bank_accountsScalarWhereWithAggregatesInput, {nullable:true})
    having?: admin_bank_accountsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
