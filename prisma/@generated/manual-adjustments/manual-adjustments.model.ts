import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { players } from '../players/players.model';
import { Admins } from '../admins/admins.model';

@ObjectType()
export class manual_adjustments {

    @Field(() => ID, {nullable:false})
    manual_adjustment_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    created_by_r!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => players, {nullable:false})
    players?: players;

    @Field(() => Admins, {nullable:false})
    admins?: Admins;
}
