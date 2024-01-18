import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';
import { GameHistoryUpdateWithoutGame_rebatesInput } from './game-history-update-without-game-rebates.input';

@InputType()
export class GameHistoryUpdateToOneWithWhereWithoutGame_rebatesInput {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;

    @Field(() => GameHistoryUpdateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => GameHistoryUpdateWithoutGame_rebatesInput)
    data!: GameHistoryUpdateWithoutGame_rebatesInput;
}
