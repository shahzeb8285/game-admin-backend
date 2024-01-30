import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosCreateManyInput } from '../game-round-infos/game-round-infos-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameRoundInfosArgs {

    @Field(() => [game_round_infosCreateManyInput], {nullable:false})
    @Type(() => game_round_infosCreateManyInput)
    data!: Array<game_round_infosCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
