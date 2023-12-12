import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsCreateWithoutPlayersInput } from './player-login-logs-create-without-players.input';
import { Type } from 'class-transformer';
import { player_login_logsCreateOrConnectWithoutPlayersInput } from './player-login-logs-create-or-connect-without-players.input';
import { player_login_logsUpsertWithWhereUniqueWithoutPlayersInput } from './player-login-logs-upsert-with-where-unique-without-players.input';
import { player_login_logsCreateManyPlayersInputEnvelope } from './player-login-logs-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { player_login_logsWhereUniqueInput } from './player-login-logs-where-unique.input';
import { player_login_logsUpdateWithWhereUniqueWithoutPlayersInput } from './player-login-logs-update-with-where-unique-without-players.input';
import { player_login_logsUpdateManyWithWhereWithoutPlayersInput } from './player-login-logs-update-many-with-where-without-players.input';
import { player_login_logsScalarWhereInput } from './player-login-logs-scalar-where.input';

@InputType()
export class player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [player_login_logsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsCreateWithoutPlayersInput)
    create?: Array<player_login_logsCreateWithoutPlayersInput>;

    @Field(() => [player_login_logsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_login_logsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [player_login_logsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<player_login_logsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => player_login_logsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_login_logsCreateManyPlayersInputEnvelope)
    createMany?: player_login_logsCreateManyPlayersInputEnvelope;

    @Field(() => [player_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => player_login_logsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<player_login_logsWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [player_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => player_login_logsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<player_login_logsWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [player_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => player_login_logsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<player_login_logsWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [player_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => player_login_logsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<player_login_logsWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [player_login_logsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<player_login_logsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [player_login_logsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<player_login_logsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [player_login_logsScalarWhereInput], {nullable:true})
    @Type(() => player_login_logsScalarWhereInput)
    deleteMany?: Array<player_login_logsScalarWhereInput>;
}
