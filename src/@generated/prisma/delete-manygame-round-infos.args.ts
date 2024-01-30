import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameRoundInfosArgs {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    @Type(() => game_round_infosWhereInput)
    where?: game_round_infosWhereInput;
}
