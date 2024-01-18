import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateInput } from './admin-bank-account-create.input';
import { AdminBankAccountUpdateInput } from './admin-bank-account-update.input';

@ArgsType()
export class UpsertOneAdminBankAccountArgs {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => AdminBankAccountCreateInput, {nullable:false})
    @Type(() => AdminBankAccountCreateInput)
    create!: AdminBankAccountCreateInput;

    @Field(() => AdminBankAccountUpdateInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateInput)
    update!: AdminBankAccountUpdateInput;
}
