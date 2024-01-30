import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_bank_accountsCreateManyInput } from '../admin-bank-accounts/admin-bank-accounts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminBankAccountsArgs {

    @Field(() => [admin_bank_accountsCreateManyInput], {nullable:false})
    @Type(() => admin_bank_accountsCreateManyInput)
    data!: Array<admin_bank_accountsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
