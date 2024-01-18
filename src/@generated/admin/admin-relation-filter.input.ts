import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';

@InputType()
export class AdminRelationFilter {

    @Field(() => AdminWhereInput, {nullable:true})
    is?: AdminWhereInput;

    @Field(() => AdminWhereInput, {nullable:true})
    isNot?: AdminWhereInput;
}
