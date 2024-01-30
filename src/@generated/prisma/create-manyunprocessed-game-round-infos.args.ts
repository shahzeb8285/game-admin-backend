import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosCreateManyInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyunprocessedGameRoundInfosArgs {

    @Field(() => [unprocessed_game_round_infosCreateManyInput], {nullable:false})
    @Type(() => unprocessed_game_round_infosCreateManyInput)
    data!: Array<unprocessed_game_round_infosCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
