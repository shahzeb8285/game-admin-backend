import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsUpdateInput } from '../admin-bank-accounts/admin-bank-accounts-update.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsWhereUniqueInput } from '../admin-bank-accounts/admin-bank-accounts-where-unique.input';

@ArgsType()
export class UpdateOneadminBankAccountsArgs {

    @Field(() => admin_bank_accountsUpdateInput, {nullable:false})
    @Type(() => admin_bank_accountsUpdateInput)
    data!: admin_bank_accountsUpdateInput;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    where!: admin_bank_accountsWhereUniqueInput;
}
