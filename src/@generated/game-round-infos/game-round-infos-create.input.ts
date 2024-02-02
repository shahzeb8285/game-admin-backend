import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutGame_round_infosInput } from '../players/players-create-nested-one-without-game-round-infos.input';

@InputType()
export class game_round_infosCreateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => playersCreateNestedOneWithoutGame_round_infosInput, {nullable:false})
    players!: playersCreateNestedOneWithoutGame_round_infosInput;
}
