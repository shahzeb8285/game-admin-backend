import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsWhereUniqueInput } from '../admin-bank-accounts/admin-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateInput } from '../admin-bank-accounts/admin-bank-accounts-create.input';
import { admin_bank_accountsUpdateInput } from '../admin-bank-accounts/admin-bank-accounts-update.input';

@ArgsType()
export class UpsertOneadminBankAccountsArgs {

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    where!: admin_bank_accountsWhereUniqueInput;

    @Field(() => admin_bank_accountsCreateInput, {nullable:false})
    @Type(() => admin_bank_accountsCreateInput)
    create!: admin_bank_accountsCreateInput;

    @Field(() => admin_bank_accountsUpdateInput, {nullable:false})
    @Type(() => admin_bank_accountsUpdateInput)
    update!: admin_bank_accountsUpdateInput;
}
