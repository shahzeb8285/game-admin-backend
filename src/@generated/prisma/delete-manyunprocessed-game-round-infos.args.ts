import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosWhereInput, {nullable:true})
    @Type(() => unprocessed_game_round_infosWhereInput)
    where?: unprocessed_game_round_infosWhereInput;
}
