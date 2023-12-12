import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsWhereInput } from '../admin-bank-accounts/admin-bank-accounts-where.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsOrderByWithRelationInput } from '../admin-bank-accounts/admin-bank-accounts-order-by-with-relation.input';
import { admin_bank_accountsWhereUniqueInput } from '../admin-bank-accounts/admin-bank-accounts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Admin_bank_accountsScalarFieldEnum } from './admin-bank-accounts-scalar-field.enum';

@ArgsType()
export class FindManyadminBankAccountsArgs {

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;

    @Field(() => [admin_bank_accountsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<admin_bank_accountsOrderByWithRelationInput>;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:true})
    cursor?: admin_bank_accountsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Admin_bank_accountsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Admin_bank_accountsScalarFieldEnum>;
}
