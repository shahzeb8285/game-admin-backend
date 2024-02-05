import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { game_record_rounds } from '../game-record-rounds/game-record-rounds.model';
import { Game_round_infosCount } from '../prisma/game-round-infos-count.output';

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

    @Field(() => [game_record_rounds], {nullable:true})
    game_record_rounds?: Array<game_record_rounds>;

    @Field(() => Game_round_infosCount, {nullable:false})
    _count?: Game_round_infosCount;
}
