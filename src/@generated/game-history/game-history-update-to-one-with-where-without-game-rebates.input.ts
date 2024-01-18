import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';
import { game_historyUpdateWithoutGame_rebatesInput } from './game-history-update-without-game-rebates.input';

@InputType()
export class game_historyUpdateToOneWithWhereWithoutGame_rebatesInput {

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;

    @Field(() => game_historyUpdateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => game_historyUpdateWithoutGame_rebatesInput)
    data!: game_historyUpdateWithoutGame_rebatesInput;
}
