import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from '../admins/admins-where.input';

@InputType()
export class AdminsRelationFilter {

    @Field(() => adminsWhereInput, {nullable:true})
    is?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    isNot?: adminsWhereInput;
}
