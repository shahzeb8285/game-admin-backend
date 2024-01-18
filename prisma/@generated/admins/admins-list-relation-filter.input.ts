import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';

@InputType()
export class AdminsListRelationFilter {

    @Field(() => AdminsWhereInput, {nullable:true})
    every?: AdminsWhereInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    some?: AdminsWhereInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    none?: AdminsWhereInput;
}
