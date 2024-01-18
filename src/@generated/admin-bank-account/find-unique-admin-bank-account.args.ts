import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminBankAccountArgs {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;
}
