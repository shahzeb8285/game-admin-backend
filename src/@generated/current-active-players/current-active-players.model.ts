import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Player } from '../player/player.model';

@ObjectType()
export class CurrentActivePlayers {

    @Field(() => ID, {nullable:false})
    player_id_r!: string;

    @Field(() => Date, {nullable:false})
    last_active_time!: Date;

    @Field(() => Player, {nullable:false})
    players?: Player;
}
