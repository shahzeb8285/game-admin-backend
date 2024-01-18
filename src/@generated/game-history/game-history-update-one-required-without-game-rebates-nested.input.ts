import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateOrConnectWithoutGame_rebatesInput } from './game-history-create-or-connect-without-game-rebates.input';
import { GameHistoryUpsertWithoutGame_rebatesInput } from './game-history-upsert-without-game-rebates.input';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { GameHistoryUpdateToOneWithWhereWithoutGame_rebatesInput } from './game-history-update-to-one-with-where-without-game-rebates.input';

@InputType()
export class GameHistoryUpdateOneRequiredWithoutGame_rebatesNestedInput {

    @Field(() => GameHistoryCreateWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryCreateWithoutGame_rebatesInput)
    create?: GameHistoryCreateWithoutGame_rebatesInput;

    @Field(() => GameHistoryCreateOrConnectWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryCreateOrConnectWithoutGame_rebatesInput)
    connectOrCreate?: GameHistoryCreateOrConnectWithoutGame_rebatesInput;

    @Field(() => GameHistoryUpsertWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryUpsertWithoutGame_rebatesInput)
    upsert?: GameHistoryUpsertWithoutGame_rebatesInput;

    @Field(() => GameHistoryWhereUniqueInput, {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    connect?: GameHistoryWhereUniqueInput;

    @Field(() => GameHistoryUpdateToOneWithWhereWithoutGame_rebatesInput, {nullable:true})
    @Type(() => GameHistoryUpdateToOneWithWhereWithoutGame_rebatesInput)
    update?: GameHistoryUpdateToOneWithWhereWithoutGame_rebatesInput;
}
