import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';
import { Type } from 'class-transformer';
import { current_active_playersCreateOrConnectWithoutPlayersInput } from './current-active-players-create-or-connect-without-players.input';
import { current_active_playersCreateManyPlayersInputEnvelope } from './current-active-players-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { current_active_playersWhereUniqueInput } from './current-active-players-where-unique.input';

@InputType()
export class current_active_playersCreateNestedManyWithoutPlayersInput {

    @Field(() => [current_active_playersCreateWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersCreateWithoutPlayersInput)
    create?: Array<current_active_playersCreateWithoutPlayersInput>;

    @Field(() => [current_active_playersCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<current_active_playersCreateOrConnectWithoutPlayersInput>;

    @Field(() => current_active_playersCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => current_active_playersCreateManyPlayersInputEnvelope)
    createMany?: current_active_playersCreateManyPlayersInputEnvelope;

    @Field(() => [current_active_playersWhereUniqueInput], {nullable:true})
    @Type(() => current_active_playersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<current_active_playersWhereUniqueInput, 'player_id_r'>>;
}
