import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { players } from '../players/players.model';

@ObjectType()
export class rebate_transactions {

    @Field(() => ID, {nullable:false})
    rebate_transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => String, {nullable:true})
    bonus_type!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => players, {nullable:false})
    player?: players;
}
