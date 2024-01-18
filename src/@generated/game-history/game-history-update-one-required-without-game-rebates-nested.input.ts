import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { Type } from 'class-transformer';
import { game_historyCreateOrConnectWithoutGame_rebatesInput } from './game-history-create-or-connect-without-game-rebates.input';
import { game_historyUpsertWithoutGame_rebatesInput } from './game-history-upsert-without-game-rebates.input';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';
import { game_historyUpdateToOneWithWhereWithoutGame_rebatesInput } from './game-history-update-to-one-with-where-without-game-rebates.input';

@InputType()
export class game_historyUpdateOneRequiredWithoutGame_rebatesNestedInput {

    @Field(() => game_historyCreateWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyCreateWithoutGame_rebatesInput)
    create?: game_historyCreateWithoutGame_rebatesInput;

    @Field(() => game_historyCreateOrConnectWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyCreateOrConnectWithoutGame_rebatesInput)
    connectOrCreate?: game_historyCreateOrConnectWithoutGame_rebatesInput;

    @Field(() => game_historyUpsertWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyUpsertWithoutGame_rebatesInput)
    upsert?: game_historyUpsertWithoutGame_rebatesInput;

    @Field(() => game_historyWhereUniqueInput, {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    connect?: game_historyWhereUniqueInput;

    @Field(() => game_historyUpdateToOneWithWhereWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyUpdateToOneWithWhereWithoutGame_rebatesInput)
    update?: game_historyUpdateToOneWithWhereWithoutGame_rebatesInput;
}
