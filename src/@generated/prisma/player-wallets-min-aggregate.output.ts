import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Player_walletsMinAggregate {

    @Field(() => String, {nullable:true})
    player_wallet_id?: string;

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    frozen_amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;
}
