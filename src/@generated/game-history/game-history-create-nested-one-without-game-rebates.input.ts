import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { Type } from 'class-transformer';
import { game_historyCreateOrConnectWithoutGame_rebatesInput } from './game-history-create-or-connect-without-game-rebates.input';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';

@InputType()
export class game_historyCreateNestedOneWithoutGame_rebatesInput {

    @Field(() => game_historyCreateWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyCreateWithoutGame_rebatesInput)
    create?: game_historyCreateWithoutGame_rebatesInput;

    @Field(() => game_historyCreateOrConnectWithoutGame_rebatesInput, {nullable:true})
    @Type(() => game_historyCreateOrConnectWithoutGame_rebatesInput)
    connectOrCreate?: game_historyCreateOrConnectWithoutGame_rebatesInput;

    @Field(() => game_historyWhereUniqueInput, {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    connect?: game_historyWhereUniqueInput;
}
