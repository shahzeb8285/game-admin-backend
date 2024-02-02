import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodCreateWithoutPlayersInput } from './game-records-by-period-create-without-players.input';
import { Type } from 'class-transformer';
import { game_records_by_periodCreateOrConnectWithoutPlayersInput } from './game-records-by-period-create-or-connect-without-players.input';
import { game_records_by_periodCreateManyPlayersInputEnvelope } from './game-records-by-period-create-many-players-input-envelope.input';
import { game_records_by_periodWhereUniqueInput } from './game-records-by-period-where-unique.input';

@InputType()
export class game_records_by_periodUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [game_records_by_periodCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodCreateWithoutPlayersInput)
    create?: Array<game_records_by_periodCreateWithoutPlayersInput>;

    @Field(() => [game_records_by_periodCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_records_by_periodCreateOrConnectWithoutPlayersInput>;

    @Field(() => game_records_by_periodCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_records_by_periodCreateManyPlayersInputEnvelope)
    createMany?: game_records_by_periodCreateManyPlayersInputEnvelope;

    @Field(() => [game_records_by_periodWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_periodWhereUniqueInput)
    connect?: Array<game_records_by_periodWhereUniqueInput>;
}
