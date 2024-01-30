import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosUpdateInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-update.input';
import { Type } from 'class-transformer';
import { unprocessed_game_round_infosWhereUniqueInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where-unique.input';

@ArgsType()
export class UpdateOneunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosUpdateInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosUpdateInput)
    data!: unprocessed_game_round_infosUpdateInput;

    @Field(() => unprocessed_game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosWhereUniqueInput)
    where!: unprocessed_game_round_infosWhereUniqueInput;
}
