import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';

@InputType()
export class AdminListRelationFilter {

    @Field(() => AdminWhereInput, {nullable:true})
    every?: AdminWhereInput;

    @Field(() => AdminWhereInput, {nullable:true})
    some?: AdminWhereInput;

    @Field(() => AdminWhereInput, {nullable:true})
    none?: AdminWhereInput;
}
