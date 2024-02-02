import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutSg_gameInput } from './game-record-rounds-create-without-sg-game.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutSg_gameInput } from './game-record-rounds-create-or-connect-without-sg-game.input';
import { game_record_roundsCreateManySg_gameInputEnvelope } from './game-record-rounds-create-many-sg-game-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsCreateNestedManyWithoutSg_gameInput {

    @Field(() => [game_record_roundsCreateWithoutSg_gameInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutSg_gameInput)
    create?: Array<game_record_roundsCreateWithoutSg_gameInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutSg_gameInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutSg_gameInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutSg_gameInput>;

    @Field(() => game_record_roundsCreateManySg_gameInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManySg_gameInputEnvelope)
    createMany?: game_record_roundsCreateManySg_gameInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
