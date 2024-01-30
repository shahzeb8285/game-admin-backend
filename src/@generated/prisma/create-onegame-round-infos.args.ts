import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosCreateInput } from '../game-round-infos/game-round-infos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameRoundInfosArgs {

    @Field(() => game_round_infosCreateInput, {nullable:false})
    @Type(() => game_round_infosCreateInput)
    data!: game_round_infosCreateInput;
}
