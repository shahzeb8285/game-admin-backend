import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from '../admins/admins-where.input';

@InputType()
export class AdminsListRelationFilter {

    @Field(() => adminsWhereInput, {nullable:true})
    every?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    some?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    none?: adminsWhereInput;
}
