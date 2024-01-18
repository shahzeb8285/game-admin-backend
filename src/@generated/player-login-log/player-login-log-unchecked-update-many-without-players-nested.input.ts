import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogCreateWithoutPlayersInput } from './player-login-log-create-without-players.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogCreateOrConnectWithoutPlayersInput } from './player-login-log-create-or-connect-without-players.input';
import { PlayerLoginLogUpsertWithWhereUniqueWithoutPlayersInput } from './player-login-log-upsert-with-where-unique-without-players.input';
import { PlayerLoginLogCreateManyPlayersInputEnvelope } from './player-login-log-create-many-players-input-envelope.input';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { PlayerLoginLogUpdateWithWhereUniqueWithoutPlayersInput } from './player-login-log-update-with-where-unique-without-players.input';
import { PlayerLoginLogUpdateManyWithWhereWithoutPlayersInput } from './player-login-log-update-many-with-where-without-players.input';
import { PlayerLoginLogScalarWhereInput } from './player-login-log-scalar-where.input';

@InputType()
export class PlayerLoginLogUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [PlayerLoginLogCreateWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogCreateWithoutPlayersInput)
    create?: Array<PlayerLoginLogCreateWithoutPlayersInput>;

    @Field(() => [PlayerLoginLogCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<PlayerLoginLogCreateOrConnectWithoutPlayersInput>;

    @Field(() => [PlayerLoginLogUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<PlayerLoginLogUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => PlayerLoginLogCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => PlayerLoginLogCreateManyPlayersInputEnvelope)
    createMany?: PlayerLoginLogCreateManyPlayersInputEnvelope;

    @Field(() => [PlayerLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    set?: Array<PlayerLoginLogWhereUniqueInput>;

    @Field(() => [PlayerLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    disconnect?: Array<PlayerLoginLogWhereUniqueInput>;

    @Field(() => [PlayerLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    delete?: Array<PlayerLoginLogWhereUniqueInput>;

    @Field(() => [PlayerLoginLogWhereUniqueInput], {nullable:true})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    connect?: Array<PlayerLoginLogWhereUniqueInput>;

    @Field(() => [PlayerLoginLogUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<PlayerLoginLogUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [PlayerLoginLogUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerLoginLogUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<PlayerLoginLogUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [PlayerLoginLogScalarWhereInput], {nullable:true})
    @Type(() => PlayerLoginLogScalarWhereInput)
    deleteMany?: Array<PlayerLoginLogScalarWhereInput>;
}
