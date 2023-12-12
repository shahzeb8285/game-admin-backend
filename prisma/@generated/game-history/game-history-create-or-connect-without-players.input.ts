import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { game_historyCreateWithoutPlayersInput } from './game-history-create-without-players.input';

@InputType()
export class game_historyCreateOrConnectWithoutPlayersInput {

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: Prisma.AtLeast<game_historyWhereUniqueInput, 'game_history_id'>;

    @Field(() => game_historyCreateWithoutPlayersInput, {nullable:false})
    @Type(() => game_historyCreateWithoutPlayersInput)
    create!: game_historyCreateWithoutPlayersInput;
}
