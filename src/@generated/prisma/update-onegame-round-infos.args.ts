import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosUpdateInput } from '../game-round-infos/game-round-infos-update.input';
import { Type } from 'class-transformer';
import { game_round_infosWhereUniqueInput } from '../game-round-infos/game-round-infos-where-unique.input';

@ArgsType()
export class UpdateOnegameRoundInfosArgs {

    @Field(() => game_round_infosUpdateInput, {nullable:false})
    @Type(() => game_round_infosUpdateInput)
    data!: game_round_infosUpdateInput;

    @Field(() => game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => game_round_infosWhereUniqueInput)
    where!: game_round_infosWhereUniqueInput;
}
