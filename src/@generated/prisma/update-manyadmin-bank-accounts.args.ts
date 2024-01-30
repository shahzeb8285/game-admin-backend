import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsUpdateManyMutationInput } from '../admin-bank-accounts/admin-bank-accounts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsWhereInput } from '../admin-bank-accounts/admin-bank-accounts-where.input';

@ArgsType()
export class UpdateManyadminBankAccountsArgs {

    @Field(() => admin_bank_accountsUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_bank_accountsUpdateManyMutationInput)
    data!: admin_bank_accountsUpdateManyMutationInput;

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;
}
