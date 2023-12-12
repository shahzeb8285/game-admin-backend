import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { game_rebatesUncheckedCreateNestedManyWithoutGame_historyInput } from '../game-rebates/game-rebates-unchecked-create-nested-many-without-game-history.input';

@InputType()
export class game_historyUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    game_history_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    win_amount!: number;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => game_rebatesUncheckedCreateNestedManyWithoutGame_historyInput, {nullable:true})
    game_rebates?: game_rebatesUncheckedCreateNestedManyWithoutGame_historyInput;
}
