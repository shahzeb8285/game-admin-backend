import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { game_historyCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';

@InputType()
export class game_historyCreateOrConnectWithoutGame_rebatesInput {

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: game_historyWhereUniqueInput;

    @Field(() => game_historyCreateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => game_historyCreateWithoutGame_rebatesInput)
    create!: game_historyCreateWithoutGame_rebatesInput;
}
