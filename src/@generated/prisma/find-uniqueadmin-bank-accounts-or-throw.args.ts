import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsWhereUniqueInput } from '../admin-bank-accounts/admin-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueadminBankAccountsOrThrowArgs {

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    where!: admin_bank_accountsWhereUniqueInput;
}
