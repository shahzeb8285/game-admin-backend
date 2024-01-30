import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from '../admin-roles/admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesOrderByWithRelationInput } from '../admin-roles/admin-roles-order-by-with-relation.input';
import { admin_rolesWhereUniqueInput } from '../admin-roles/admin-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Admin_rolesScalarFieldEnum } from './admin-roles-scalar-field.enum';

@ArgsType()
export class FindFirstadminRolesArgs {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => [admin_rolesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<admin_rolesOrderByWithRelationInput>;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    cursor?: admin_rolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Admin_rolesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Admin_rolesScalarFieldEnum>;
}
