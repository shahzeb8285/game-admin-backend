import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosCreateInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosCreateInput, {nullable:true})
    @Type(() => unprocessed_game_round_infosCreateInput)
    data?: unprocessed_game_round_infosCreateInput;
}
