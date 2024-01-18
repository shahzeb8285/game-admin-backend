import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';

@InputType()
export class AdminRoleAccessesListRelationFilter {

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    every?: AdminRoleAccessesWhereInput;

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    some?: AdminRoleAccessesWhereInput;

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    none?: AdminRoleAccessesWhereInput;
}
