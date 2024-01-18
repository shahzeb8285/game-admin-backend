import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { Type } from 'class-transformer';
import { AdminRoleOrderByWithRelationInput } from './admin-role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleScalarFieldEnum } from './admin-role-scalar-field.enum';

@ArgsType()
export class FindManyAdminRoleArgs {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;

    @Field(() => [AdminRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminRoleOrderByWithRelationInput>;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminRoleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminRoleScalarFieldEnum>;
}
