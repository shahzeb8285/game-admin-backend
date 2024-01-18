import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';

@InputType()
export class AdminLoginLogListRelationFilter {

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    every?: AdminLoginLogWhereInput;

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    some?: AdminLoginLogWhereInput;

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    none?: AdminLoginLogWhereInput;
}
