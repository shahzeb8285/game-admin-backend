import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Game_round_infosMinAggregate {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    i_gamedesc?: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
