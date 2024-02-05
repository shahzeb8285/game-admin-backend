import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateNestedManyWithoutGame_roundInput } from '../game-record-rounds/game-record-rounds-create-nested-many-without-game-round.input';

@InputType()
export class game_round_infosCreateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => game_record_roundsCreateNestedManyWithoutGame_roundInput, {nullable:true})
    game_record_rounds?: game_record_roundsCreateNestedManyWithoutGame_roundInput;
}
