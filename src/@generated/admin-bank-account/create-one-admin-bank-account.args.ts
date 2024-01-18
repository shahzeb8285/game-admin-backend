import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountCreateInput } from './admin-bank-account-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminBankAccountArgs {

    @Field(() => AdminBankAccountCreateInput, {nullable:false})
    @Type(() => AdminBankAccountCreateInput)
    data!: AdminBankAccountCreateInput;
}
