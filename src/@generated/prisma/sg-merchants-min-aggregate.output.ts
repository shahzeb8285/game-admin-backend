import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchantsMinAggregate {

    @Field(() => String, {nullable:true})
    sg_merchant_id?: string;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;

    @Field(() => String, {nullable:true})
    merchant_name?: string;

    @Field(() => String, {nullable:true})
    merchant_alias?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
