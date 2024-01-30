import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Sg_countries_restrictionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    coun_rest_id?: number;

    @Field(() => Float, {nullable:true})
    merchant_id?: number;
}
