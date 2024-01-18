import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateInput } from './admin-bank-account-create.input';
import { AdminBankAccountUpdateInput } from './admin-bank-account-update.input';

@ArgsType()
export class UpsertOneAdminBankAccountArgs {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: AdminBankAccountWhereUniqueInput;

    @Field(() => AdminBankAccountCreateInput, {nullable:false})
    @Type(() => AdminBankAccountCreateInput)
    create!: AdminBankAccountCreateInput;

    @Field(() => AdminBankAccountUpdateInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateInput)
    update!: AdminBankAccountUpdateInput;
}
