import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from '../admin-roles/admin-roles-where.input';

@InputType()
export class Admin_rolesRelationFilter {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    is?: admin_rolesWhereInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    isNot?: admin_rolesWhereInput;
}
