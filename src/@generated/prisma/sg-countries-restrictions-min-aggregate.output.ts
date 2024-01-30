import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_countries_restrictionsMinAggregate {

    @Field(() => String, {nullable:true})
    sg_coun_rest_id?: string;

    @Field(() => Int, {nullable:true})
    coun_rest_id?: number;

    @Field(() => String, {nullable:true})
    coun_rest_name?: string;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;

    @Field(() => String, {nullable:true})
    countries?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
