import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { game_rebatesCreateNestedManyWithoutGame_historyInput } from '../game-rebates/game-rebates-create-nested-many-without-game-history.input';

@InputType()
export class game_historyCreateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    game_history_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

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

    @Field(() => game_rebatesCreateNestedManyWithoutGame_historyInput, {nullable:true})
    game_rebates?: game_rebatesCreateNestedManyWithoutGame_historyInput;
}
