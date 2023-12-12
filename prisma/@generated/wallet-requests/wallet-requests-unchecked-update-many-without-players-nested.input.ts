import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsCreateWithoutPlayersInput } from './wallet-requests-create-without-players.input';
import { Type } from 'class-transformer';
import { wallet_requestsCreateOrConnectWithoutPlayersInput } from './wallet-requests-create-or-connect-without-players.input';
import { wallet_requestsUpsertWithWhereUniqueWithoutPlayersInput } from './wallet-requests-upsert-with-where-unique-without-players.input';
import { wallet_requestsCreateManyPlayersInputEnvelope } from './wallet-requests-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { wallet_requestsWhereUniqueInput } from './wallet-requests-where-unique.input';
import { wallet_requestsUpdateWithWhereUniqueWithoutPlayersInput } from './wallet-requests-update-with-where-unique-without-players.input';
import { wallet_requestsUpdateManyWithWhereWithoutPlayersInput } from './wallet-requests-update-many-with-where-without-players.input';
import { wallet_requestsScalarWhereInput } from './wallet-requests-scalar-where.input';

@InputType()
export class wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [wallet_requestsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsCreateWithoutPlayersInput)
    create?: Array<wallet_requestsCreateWithoutPlayersInput>;

    @Field(() => [wallet_requestsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<wallet_requestsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [wallet_requestsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<wallet_requestsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => wallet_requestsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => wallet_requestsCreateManyPlayersInputEnvelope)
    createMany?: wallet_requestsCreateManyPlayersInputEnvelope;

    @Field(() => [wallet_requestsWhereUniqueInput], {nullable:true})
    @Type(() => wallet_requestsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>>;

    @Field(() => [wallet_requestsWhereUniqueInput], {nullable:true})
    @Type(() => wallet_requestsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>>;

    @Field(() => [wallet_requestsWhereUniqueInput], {nullable:true})
    @Type(() => wallet_requestsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>>;

    @Field(() => [wallet_requestsWhereUniqueInput], {nullable:true})
    @Type(() => wallet_requestsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>>;

    @Field(() => [wallet_requestsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<wallet_requestsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [wallet_requestsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<wallet_requestsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [wallet_requestsScalarWhereInput], {nullable:true})
    @Type(() => wallet_requestsScalarWhereInput)
    deleteMany?: Array<wallet_requestsScalarWhereInput>;
}
