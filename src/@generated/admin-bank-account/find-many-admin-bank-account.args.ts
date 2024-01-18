import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';
import { Type } from 'class-transformer';
import { AdminBankAccountOrderByWithRelationInput } from './admin-bank-account-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminBankAccountScalarFieldEnum } from './admin-bank-account-scalar-field.enum';

@ArgsType()
export class FindManyAdminBankAccountArgs {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;

    @Field(() => [AdminBankAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminBankAccountOrderByWithRelationInput>;

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminBankAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminBankAccountScalarFieldEnum>;
}