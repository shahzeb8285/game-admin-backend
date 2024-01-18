import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersCreateOrConnectWithoutPlayersInput } from './current-active-players-create-or-connect-without-players.input';
import { CurrentActivePlayersUpsertWithWhereUniqueWithoutPlayersInput } from './current-active-players-upsert-with-where-unique-without-players.input';
import { CurrentActivePlayersCreateManyPlayersInputEnvelope } from './current-active-players-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput } from './current-active-players-update-with-where-unique-without-players.input';
import { CurrentActivePlayersUpdateManyWithWhereWithoutPlayersInput } from './current-active-players-update-many-with-where-without-players.input';
import { CurrentActivePlayersScalarWhereInput } from './current-active-players-scalar-where.input';

@InputType()
export class CurrentActivePlayersUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [CurrentActivePlayersCreateWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersCreateWithoutPlayersInput)
    create?: Array<CurrentActivePlayersCreateWithoutPlayersInput>;

    @Field(() => [CurrentActivePlayersCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<CurrentActivePlayersCreateOrConnectWithoutPlayersInput>;

    @Field(() => [CurrentActivePlayersUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<CurrentActivePlayersUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => CurrentActivePlayersCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => CurrentActivePlayersCreateManyPlayersInputEnvelope)
    createMany?: CurrentActivePlayersCreateManyPlayersInputEnvelope;

    @Field(() => [CurrentActivePlayersWhereUniqueInput], {nullable:true})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [CurrentActivePlayersWhereUniqueInput], {nullable:true})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [CurrentActivePlayersWhereUniqueInput], {nullable:true})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [CurrentActivePlayersWhereUniqueInput], {nullable:true})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>>;

    @Field(() => [CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [CurrentActivePlayersUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => CurrentActivePlayersUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<CurrentActivePlayersUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [CurrentActivePlayersScalarWhereInput], {nullable:true})
    @Type(() => CurrentActivePlayersScalarWhereInput)
    deleteMany?: Array<CurrentActivePlayersScalarWhereInput>;
}
