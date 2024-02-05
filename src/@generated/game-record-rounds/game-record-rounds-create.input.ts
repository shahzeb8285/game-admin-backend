import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { game_round_infosCreateNestedOneWithoutGame_record_roundsInput } from '../game-round-infos/game-round-infos-create-nested-one-without-game-record-rounds.input';
import { fl_categoriesCreateNestedOneWithoutGame_record_roundsInput } from '../fl-categories/fl-categories-create-nested-one-without-game-record-rounds.input';
import { playersCreateNestedOneWithoutGame_record_roundsInput } from '../players/players-create-nested-one-without-game-record-rounds.input';

@InputType()
export class game_record_roundsCreateInput {

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:false})
    payout!: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Boolean, {nullable:false})
    is_processed!: boolean;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => game_round_infosCreateNestedOneWithoutGame_record_roundsInput, {nullable:false})
    game_round!: game_round_infosCreateNestedOneWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesCreateNestedOneWithoutGame_record_roundsInput, {nullable:false})
    category!: fl_categoriesCreateNestedOneWithoutGame_record_roundsInput;

    @Field(() => playersCreateNestedOneWithoutGame_record_roundsInput, {nullable:false})
    player!: playersCreateNestedOneWithoutGame_record_roundsInput;
}
