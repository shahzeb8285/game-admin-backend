import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountUpdateInput } from './admin-bank-account-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';

@ArgsType()
export class UpdateOneAdminBankAccountArgs {

    @Field(() => AdminBankAccountUpdateInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateInput)
    data!: AdminBankAccountUpdateInput;

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;
}
