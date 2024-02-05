import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsUpdateManyWithoutGame_roundNestedInput } from '../game-record-rounds/game-record-rounds-update-many-without-game-round-nested.input';

@InputType()
export class game_round_infosUpdateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    i_gamedesc?: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => game_record_roundsUpdateManyWithoutGame_roundNestedInput, {nullable:true})
    game_record_rounds?: game_record_roundsUpdateManyWithoutGame_roundNestedInput;
}
