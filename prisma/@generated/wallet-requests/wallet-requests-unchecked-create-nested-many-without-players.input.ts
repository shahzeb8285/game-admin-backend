import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsCreateWithoutPlayersInput } from './wallet-requests-create-without-players.input';
import { Type } from 'class-transformer';
import { wallet_requestsCreateOrConnectWithoutPlayersInput } from './wallet-requests-create-or-connect-without-players.input';
import { wallet_requestsCreateManyPlayersInputEnvelope } from './wallet-requests-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { wallet_requestsWhereUniqueInput } from './wallet-requests-where-unique.input';

@InputType()
export class wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [wallet_requestsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsCreateWithoutPlayersInput)
    create?: Array<wallet_requestsCreateWithoutPlayersInput>;

    @Field(() => [wallet_requestsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => wallet_requestsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<wallet_requestsCreateOrConnectWithoutPlayersInput>;

    @Field(() => wallet_requestsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => wallet_requestsCreateManyPlayersInputEnvelope)
    createMany?: wallet_requestsCreateManyPlayersInputEnvelope;

    @Field(() => [wallet_requestsWhereUniqueInput], {nullable:true})
    @Type(() => wallet_requestsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>>;
}
