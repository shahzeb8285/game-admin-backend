import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_countries_restrictionsSumAggregate {

    @Field(() => Int, {nullable:true})
    coun_rest_id?: number;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;
}
