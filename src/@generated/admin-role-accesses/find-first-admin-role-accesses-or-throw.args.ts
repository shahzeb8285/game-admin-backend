import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesOrderByWithRelationInput } from './admin-role-accesses-order-by-with-relation.input';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleAccessesScalarFieldEnum } from './admin-role-accesses-scalar-field.enum';

@ArgsType()
export class FindFirstAdminRoleAccessesOrThrowArgs {

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    @Type(() => AdminRoleAccessesWhereInput)
    where?: AdminRoleAccessesWhereInput;

    @Field(() => [AdminRoleAccessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminRoleAccessesOrderByWithRelationInput>;

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:true})
    cursor?: AdminRoleAccessesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminRoleAccessesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminRoleAccessesScalarFieldEnum>;
}
