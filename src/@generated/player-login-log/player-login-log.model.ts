import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Player } from '../player/player.model';

@ObjectType()
export class PlayerLoginLog {

    @Field(() => ID, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => Player, {nullable:false})
    players?: Player;
}
