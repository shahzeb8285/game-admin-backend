import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosWhereUniqueInput } from '../game-round-infos/game-round-infos-where-unique.input';
import { Type } from 'class-transformer';
import { game_round_infosCreateInput } from '../game-round-infos/game-round-infos-create.input';
import { game_round_infosUpdateInput } from '../game-round-infos/game-round-infos-update.input';

@ArgsType()
export class UpsertOnegameRoundInfosArgs {

    @Field(() => game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => game_round_infosWhereUniqueInput)
    where!: game_round_infosWhereUniqueInput;

    @Field(() => game_round_infosCreateInput, {nullable:false})
    @Type(() => game_round_infosCreateInput)
    create!: game_round_infosCreateInput;

    @Field(() => game_round_infosUpdateInput, {nullable:false})
    @Type(() => game_round_infosUpdateInput)
    update!: game_round_infosUpdateInput;
}
