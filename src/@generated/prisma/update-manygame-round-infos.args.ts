import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosUpdateManyMutationInput } from '../game-round-infos/game-round-infos-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';

@ArgsType()
export class UpdateManygameRoundInfosArgs {

    @Field(() => game_round_infosUpdateManyMutationInput, {nullable:false})
    @Type(() => game_round_infosUpdateManyMutationInput)
    data!: game_round_infosUpdateManyMutationInput;

    @Field(() => game_round_infosWhereInput, {nullable:true})
    @Type(() => game_round_infosWhereInput)
    where?: game_round_infosWhereInput;
}
