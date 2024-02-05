import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGame_roundInput } from './game-record-rounds-create-without-game-round.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGame_roundInput } from './game-record-rounds-create-or-connect-without-game-round.input';
import { game_record_roundsCreateManyGame_roundInputEnvelope } from './game-record-rounds-create-many-game-round-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsCreateNestedManyWithoutGame_roundInput {

    @Field(() => [game_record_roundsCreateWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGame_roundInput)
    create?: Array<game_record_roundsCreateWithoutGame_roundInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGame_roundInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutGame_roundInput>;

    @Field(() => game_record_roundsCreateManyGame_roundInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyGame_roundInputEnvelope)
    createMany?: game_record_roundsCreateManyGame_roundInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
