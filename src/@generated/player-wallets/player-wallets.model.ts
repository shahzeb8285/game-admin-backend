import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { players } from '../players/players.model';

@ObjectType()
export class player_wallets {

    @Field(() => ID, {nullable:false})
    player_wallet_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => players, {nullable:false})
    players?: players;
}
