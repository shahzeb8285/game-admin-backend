import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosUpdateManyMutationInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-update-many-mutation.input';
import { Type } from 'class-transformer';
import { unprocessed_game_round_infosWhereInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where.input';

@ArgsType()
export class UpdateManyunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosUpdateManyMutationInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosUpdateManyMutationInput)
    data!: unprocessed_game_round_infosUpdateManyMutationInput;

    @Field(() => unprocessed_game_round_infosWhereInput, {nullable:true})
    @Type(() => unprocessed_game_round_infosWhereInput)
    where?: unprocessed_game_round_infosWhereInput;
}
