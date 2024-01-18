import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';

@InputType()
export class AdminsRelationFilter {

    @Field(() => AdminsWhereInput, {nullable:true})
    is?: AdminsWhereInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    isNot?: AdminsWhereInput;
}
