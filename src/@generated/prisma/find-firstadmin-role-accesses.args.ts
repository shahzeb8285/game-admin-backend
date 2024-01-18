import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_role_accessesOrderByWithRelationInput } from '../admin-role-accesses/admin-role-accesses-order-by-with-relation.input';
import { admin_role_accessesWhereUniqueInput } from '../admin-role-accesses/admin-role-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Admin_role_accessesScalarFieldEnum } from './admin-role-accesses-scalar-field.enum';

@ArgsType()
export class FindFirstadminRoleAccessesArgs {

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    @Type(() => admin_role_accessesWhereInput)
    where?: admin_role_accessesWhereInput;

    @Field(() => [admin_role_accessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<admin_role_accessesOrderByWithRelationInput>;

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:true})
    cursor?: admin_role_accessesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Admin_role_accessesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Admin_role_accessesScalarFieldEnum>;
}
