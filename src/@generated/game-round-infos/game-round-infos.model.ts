import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { players } from '../players/players.model';

@ObjectType()
export class game_round_infos {

    @Field(() => ID, {nullable:false})
    game_round_info_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:true})
    i_extparam!: string | null;

    @Field(() => String, {nullable:true})
    game_extra!: string | null;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => players, {nullable:false})
    players?: players;
}
