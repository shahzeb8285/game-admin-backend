import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class sg_countries_restrictionsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    sg_coun_rest_id?: string;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => String, {nullable:false})
    coun_rest_name!: string;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => String, {nullable:false})
    countries!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
