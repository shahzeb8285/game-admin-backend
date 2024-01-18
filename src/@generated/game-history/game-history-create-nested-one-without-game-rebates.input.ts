import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateOrConnectWithoutGame_rebatesInput } from './game-history-create-or-connect-without-game-rebates.input';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';

@InputType()
export class GameHistoryCreateNestedOneWithoutGame_rebatesInput {

    @Field(() => GameHistoryCreateWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryCreateWithoutGame_rebatesInput)
    create?: GameHistoryCreateWithoutGame_rebatesInput;

    @Field(() => GameHistoryCreateOrConnectWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryCreateOrConnectWithoutGame_rebatesInput)
    connectOrCreate?: GameHistoryCreateOrConnectWithoutGame_rebatesInput;

    @Field(() => GameHistoryWhereUniqueInput, {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    connect?: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;
}
