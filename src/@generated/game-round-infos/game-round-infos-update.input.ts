import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutGame_round_infosNestedInput } from '../players/players-update-one-required-without-game-round-infos-nested.input';

@InputType()
export class game_round_infosUpdateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    i_gamedesc?: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => playersUpdateOneRequiredWithoutGame_round_infosNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutGame_round_infosNestedInput;
}
