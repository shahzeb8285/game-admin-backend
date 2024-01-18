import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';

@InputType()
export class Admin_role_accessesListRelationFilter {

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    every?: admin_role_accessesWhereInput;

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    some?: admin_role_accessesWhereInput;

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    none?: admin_role_accessesWhereInput;
}
