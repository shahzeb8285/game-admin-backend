import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';
import { Type } from 'class-transformer';
import { AdminLoginLogOrderByWithRelationInput } from './admin-login-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminLoginLogScalarFieldEnum } from './admin-login-log-scalar-field.enum';

@ArgsType()
export class FindFirstAdminLoginLogArgs {

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    @Type(() => AdminLoginLogWhereInput)
    where?: AdminLoginLogWhereInput;

    @Field(() => [AdminLoginLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminLoginLogOrderByWithRelationInput>;

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminLoginLogWhereUniqueInput, 'login_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminLoginLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminLoginLogScalarFieldEnum>;
}
