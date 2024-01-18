import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { players } from '../players/players.model';

@ObjectType()
export class current_active_players {

    @Field(() => ID, {nullable:false})
    player_id_r!: string;

    @Field(() => Date, {nullable:false})
    last_active_time!: Date;

    @Field(() => players, {nullable:false})
    players?: players;
}
