import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';

@InputType()
export class AdminRoleRelationFilter {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    is?: AdminRoleWhereInput;

    @Field(() => AdminRoleWhereInput, {nullable:true})
    isNot?: AdminRoleWhereInput;
}
