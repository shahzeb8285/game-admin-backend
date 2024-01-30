import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class sg_countries_restrictionsUncheckedUpdateInput {

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
