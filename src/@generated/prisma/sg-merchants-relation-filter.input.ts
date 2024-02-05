import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsWhereInput } from '../sg-merchants/sg-merchants-where.input';

@InputType()
export class Sg_merchantsRelationFilter {

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    is?: sg_merchantsWhereInput;

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    isNot?: sg_merchantsWhereInput;
}
