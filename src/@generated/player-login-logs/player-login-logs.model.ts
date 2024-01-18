import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { players } from '../players/players.model';

@ObjectType()
export class player_login_logs {

    @Field(() => ID, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => players, {nullable:false})
    players?: players;
}
