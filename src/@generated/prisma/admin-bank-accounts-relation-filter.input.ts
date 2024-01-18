import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsWhereInput } from '../admin-bank-accounts/admin-bank-accounts-where.input';

@InputType()
export class Admin_bank_accountsRelationFilter {

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    is?: admin_bank_accountsWhereInput;

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    isNot?: admin_bank_accountsWhereInput;
}
