import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogCreateWithoutPlayersInput } from './player-login-log-create-without-players.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogCreateOrConnectWithoutPlayersInput } from './player-login-log-create-or-connect-without-players.input';
import { PlayerLoginLogCreateManyPlayersInputEnvelope } from './player-login-log-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';

@InputType()
export class PlayerLoginLogCreateNestedManyWithoutPlayersInput {

    @Field(() => [PlayerLoginLogCreateWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogCreateWithoutPlayersInput)
    create?: Array<PlayerLoginLogCreateWithoutPlayersInput>;

    @Field(() => [PlayerLoginLogCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<PlayerLoginLogCreateOrConnectWithoutPlayersInput>;

    @Field(() => PlayerLoginLogCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => PlayerLoginLogCreateManyPlayersInputEnvelope)
    createMany?: PlayerLoginLogCreateManyPlayersInputEnvelope;

    @Field(() => [PlayerLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>>;
}
