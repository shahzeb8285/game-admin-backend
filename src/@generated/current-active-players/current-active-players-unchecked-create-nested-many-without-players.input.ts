import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersCreateOrConnectWithoutPlayersInput } from './current-active-players-create-or-connect-without-players.input';
import { CurrentActivePlayersCreateManyPlayersInputEnvelope } from './current-active-players-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';

@InputType()
export class CurrentActivePlayersUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [CurrentActivePlayersCreateWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersCreateWithoutPlayersInput)
    create?: Array<CurrentActivePlayersCreateWithoutPlayersInput>;

    @Field(() => [CurrentActivePlayersCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<CurrentActivePlayersCreateOrConnectWithoutPlayersInput>;

    @Field(() => CurrentActivePlayersCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => CurrentActivePlayersCreateManyPlayersInputEnvelope)
    createMany?: CurrentActivePlayersCreateManyPlayersInputEnvelope;

    @Field(() => [CurrentActivePlayersWhereUniqueInput], {nullable:true})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>>;
}
