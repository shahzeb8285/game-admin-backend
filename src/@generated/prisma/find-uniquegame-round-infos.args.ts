import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosWhereUniqueInput } from '../game-round-infos/game-round-infos-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquegameRoundInfosArgs {

    @Field(() => game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => game_round_infosWhereUniqueInput)
    where!: game_round_infosWhereUniqueInput;
}
