import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyUpdateWithoutGame_rebatesInput } from './game-history-update-without-game-rebates.input';
import { Type } from 'class-transformer';
import { game_historyCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { game_historyWhereInput } from './game-history-where.input';

@InputType()
export class game_historyUpsertWithoutGame_rebatesInput {

    @Field(() => game_historyUpdateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => game_historyUpdateWithoutGame_rebatesInput)
    update!: game_historyUpdateWithoutGame_rebatesInput;

    @Field(() => game_historyCreateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => game_historyCreateWithoutGame_rebatesInput)
    create!: game_historyCreateWithoutGame_rebatesInput;

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;
}
