import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayCreateWithoutPlayersInput } from './game-records-by-day-create-without-players.input';
import { Type } from 'class-transformer';
import { game_records_by_dayCreateOrConnectWithoutPlayersInput } from './game-records-by-day-create-or-connect-without-players.input';
import { game_records_by_dayCreateManyPlayersInputEnvelope } from './game-records-by-day-create-many-players-input-envelope.input';
import { game_records_by_dayWhereUniqueInput } from './game-records-by-day-where-unique.input';

@InputType()
export class game_records_by_dayCreateNestedManyWithoutPlayersInput {

    @Field(() => [game_records_by_dayCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayCreateWithoutPlayersInput)
    create?: Array<game_records_by_dayCreateWithoutPlayersInput>;

    @Field(() => [game_records_by_dayCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_records_by_dayCreateOrConnectWithoutPlayersInput>;

    @Field(() => game_records_by_dayCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_records_by_dayCreateManyPlayersInputEnvelope)
    createMany?: game_records_by_dayCreateManyPlayersInputEnvelope;

    @Field(() => [game_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_dayWhereUniqueInput)
    connect?: Array<game_records_by_dayWhereUniqueInput>;
}
