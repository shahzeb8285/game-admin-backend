import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereUniqueInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueunprocessedGameRoundInfosOrThrowArgs {

    @Field(() => unprocessed_game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => unprocessed_game_round_infosWhereUniqueInput)
    where!: unprocessed_game_round_infosWhereUniqueInput;
}
