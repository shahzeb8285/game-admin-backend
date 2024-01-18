import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsWhereInput } from '../admin-bank-accounts/admin-bank-accounts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminBankAccountsArgs {

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;
}
