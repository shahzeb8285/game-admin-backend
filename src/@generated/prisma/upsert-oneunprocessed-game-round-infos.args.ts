import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereUniqueInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where-unique.input';
import { Type } from 'class-transformer';
import { unprocessed_game_round_infosCreateInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-create.input';
import { unprocessed_game_round_infosUpdateInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-update.input';

@ArgsType()
export class UpsertOneunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosWhereUniqueInput)
    where!: unprocessed_game_round_infosWhereUniqueInput;

    @Field(() => unprocessed_game_round_infosCreateInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosCreateInput)
    create!: unprocessed_game_round_infosCreateInput;

    @Field(() => unprocessed_game_round_infosUpdateInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosUpdateInput)
    update!: unprocessed_game_round_infosUpdateInput;
}
