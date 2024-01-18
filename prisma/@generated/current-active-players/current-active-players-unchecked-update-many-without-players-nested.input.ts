import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';
import { Type } from 'class-transformer';
import { current_active_playersCreateOrConnectWithoutPlayersInput } from './current-active-players-create-or-connect-without-players.input';
import { current_active_playersUpsertWithWhereUniqueWithoutPlayersInput } from './current-active-players-upsert-with-where-unique-without-players.input';
import { current_active_playersCreateManyPlayersInputEnvelope } from './current-active-players-create-many-players-input-envelope.input';
import { current_active_playersWhereUniqueInput } from './current-active-players-where-unique.input';
import { current_active_playersUpdateWithWhereUniqueWithoutPlayersInput } from './current-active-players-update-with-where-unique-without-players.input';
import { current_active_playersUpdateManyWithWhereWithoutPlayersInput } from './current-active-players-update-many-with-where-without-players.input';
import { current_active_playersScalarWhereInput } from './current-active-players-scalar-where.input';

@InputType()
export class current_active_playersUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [current_active_playersCreateWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersCreateWithoutPlayersInput)
    create?: Array<current_active_playersCreateWithoutPlayersInput>;

    @Field(() => [current_active_playersCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<current_active_playersCreateOrConnectWithoutPlayersInput>;

    @Field(() => [current_active_playersUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<current_active_playersUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => current_active_playersCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => current_active_playersCreateManyPlayersInputEnvelope)
    createMany?: current_active_playersCreateManyPlayersInputEnvelope;

    @Field(() => [current_active_playersWhereUniqueInput], {nullable:true})
    @Type(() => current_active_playersWhereUniqueInput)
    set?: Array<current_active_playersWhereUniqueInput>;

    @Field(() => [current_active_playersWhereUniqueInput], {nullable:true})
    @Type(() => current_active_playersWhereUniqueInput)
    disconnect?: Array<current_active_playersWhereUniqueInput>;

    @Field(() => [current_active_playersWhereUniqueInput], {nullable:true})
    @Type(() => current_active_playersWhereUniqueInput)
    delete?: Array<current_active_playersWhereUniqueInput>;

    @Field(() => [current_active_playersWhereUniqueInput], {nullable:true})
    @Type(() => current_active_playersWhereUniqueInput)
    connect?: Array<current_active_playersWhereUniqueInput>;

    @Field(() => [current_active_playersUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<current_active_playersUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [current_active_playersUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => current_active_playersUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<current_active_playersUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [current_active_playersScalarWhereInput], {nullable:true})
    @Type(() => current_active_playersScalarWhereInput)
    deleteMany?: Array<current_active_playersScalarWhereInput>;
}
