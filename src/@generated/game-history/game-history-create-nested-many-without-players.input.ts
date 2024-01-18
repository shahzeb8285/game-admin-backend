import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyCreateWithoutPlayersInput } from './game-history-create-without-players.input';
import { Type } from 'class-transformer';
import { game_historyCreateOrConnectWithoutPlayersInput } from './game-history-create-or-connect-without-players.input';
import { game_historyCreateManyPlayersInputEnvelope } from './game-history-create-many-players-input-envelope.input';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';

@InputType()
export class game_historyCreateNestedManyWithoutPlayersInput {

    @Field(() => [game_historyCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyCreateWithoutPlayersInput)
    create?: Array<game_historyCreateWithoutPlayersInput>;

    @Field(() => [game_historyCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_historyCreateOrConnectWithoutPlayersInput>;

    @Field(() => game_historyCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_historyCreateManyPlayersInputEnvelope)
    createMany?: game_historyCreateManyPlayersInputEnvelope;

    @Field(() => [game_historyWhereUniqueInput], {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    connect?: Array<game_historyWhereUniqueInput>;
}
