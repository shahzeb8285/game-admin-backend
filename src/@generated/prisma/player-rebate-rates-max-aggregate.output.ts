import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Player_rebate_ratesMaxAggregate {

    @Field(() => String, {nullable:true})
    player_rebate_rate_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    rebate?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;
}
