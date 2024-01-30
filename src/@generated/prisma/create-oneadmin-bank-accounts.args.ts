import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsCreateInput } from '../admin-bank-accounts/admin-bank-accounts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminBankAccountsArgs {

    @Field(() => admin_bank_accountsCreateInput, {nullable:false})
    @Type(() => admin_bank_accountsCreateInput)
    data!: admin_bank_accountsCreateInput;
}
