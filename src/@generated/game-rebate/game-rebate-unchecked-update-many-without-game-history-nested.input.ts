import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateCreateWithoutGame_historyInput } from './game-rebate-create-without-game-history.input';
import { Type } from 'class-transformer';
import { GameRebateCreateOrConnectWithoutGame_historyInput } from './game-rebate-create-or-connect-without-game-history.input';
import { GameRebateUpsertWithWhereUniqueWithoutGame_historyInput } from './game-rebate-upsert-with-where-unique-without-game-history.input';
import { GameRebateCreateManyGame_historyInputEnvelope } from './game-rebate-create-many-game-history-input-envelope.input';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { GameRebateUpdateWithWhereUniqueWithoutGame_historyInput } from './game-rebate-update-with-where-unique-without-game-history.input';
import { GameRebateUpdateManyWithWhereWithoutGame_historyInput } from './game-rebate-update-many-with-where-without-game-history.input';
import { GameRebateScalarWhereInput } from './game-rebate-scalar-where.input';

@InputType()
export class GameRebateUncheckedUpdateManyWithoutGame_historyNestedInput {

    @Field(() => [GameRebateCreateWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateCreateWithoutGame_historyInput)
    create?: Array<GameRebateCreateWithoutGame_historyInput>;

    @Field(() => [GameRebateCreateOrConnectWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: Array<GameRebateCreateOrConnectWithoutGame_historyInput>;

    @Field(() => [GameRebateUpsertWithWhereUniqueWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateUpsertWithWhereUniqueWithoutGame_historyInput)
    upsert?: Array<GameRebateUpsertWithWhereUniqueWithoutGame_historyInput>;

    @Field(() => GameRebateCreateManyGame_historyInputEnvelope, {nullable:true})
    @Type(() => GameRebateCreateManyGame_historyInputEnvelope)
    createMany?: GameRebateCreateManyGame_historyInputEnvelope;

    @Field(() => [GameRebateWhereUniqueInput], {nullable:true})
    @Type(() => GameRebateWhereUniqueInput)
    set?: Array<GameRebateWhereUniqueInput>;

    @Field(() => [GameRebateWhereUniqueInput], {nullable:true})
    @Type(() => GameRebateWhereUniqueInput)
    disconnect?: Array<GameRebateWhereUniqueInput>;

    @Field(() => [GameRebateWhereUniqueInput], {nullable:true})
    @Type(() => GameRebateWhereUniqueInput)
    delete?: Array<GameRebateWhereUniqueInput>;

    @Field(() => [GameRebateWhereUniqueInput], {nullable:true})
    @Type(() => GameRebateWhereUniqueInput)
    connect?: Array<GameRebateWhereUniqueInput>;

    @Field(() => [GameRebateUpdateWithWhereUniqueWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateUpdateWithWhereUniqueWithoutGame_historyInput)
    update?: Array<GameRebateUpdateWithWhereUniqueWithoutGame_historyInput>;

    @Field(() => [GameRebateUpdateManyWithWhereWithoutGame_historyInput], {nullable:true})
    @Type(() => GameRebateUpdateManyWithWhereWithoutGame_historyInput)
    updateMany?: Array<GameRebateUpdateManyWithWhereWithoutGame_historyInput>;

    @Field(() => [GameRebateScalarWhereInput], {nullable:true})
    @Type(() => GameRebateScalarWhereInput)
    deleteMany?: Array<GameRebateScalarWhereInput>;
}
