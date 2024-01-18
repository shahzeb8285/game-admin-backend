import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateCreateWithoutGame_historyInput } from './game-rebate-create-without-game-history.input';
import { Type } from 'class-transformer';
import { GameRebateCreateOrConnectWithoutGame_historyInput } from './game-rebate-create-or-connect-without-game-history.input';
import { GameRebateCreateManyGame_historyInputEnvelope } from './game-rebate-create-many-game-history-input-envelope.input';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';

@InputType()
export class GameRebateCreateNestedManyWithoutGame_historyInput {

    @Field(() => [GameRebateCreateWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateCreateWithoutGame_historyInput)
    create?: Array<GameRebateCreateWithoutGame_historyInput>;

    @Field(() => [GameRebateCreateOrConnectWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: Array<GameRebateCreateOrConnectWithoutGame_historyInput>;

    @Field(() => GameRebateCreateManyGame_historyInputEnvelope, {nullable:true})
    @Type(() => GameRebateCreateManyGame_historyInputEnvelope)
    createMany?: GameRebateCreateManyGame_historyInputEnvelope;

    @Field(() => [GameRebateWhereUniqueInput], {nullable:true})
    @Type(() => GameRebateWhereUniqueInput)
    connect?: Array<GameRebateWhereUniqueInput>;
}
