import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { wallet_requestsWhereUniqueInput } from './wallet-requests-where-unique.input';
import { Type } from 'class-transformer';
import { wallet_requestsCreateWithoutPlayersInput } from './wallet-requests-create-without-players.input';

@InputType()
export class wallet_requestsCreateOrConnectWithoutPlayersInput {

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => wallet_requestsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => wallet_requestsCreateWithoutPlayersInput)
    create!: wallet_requestsCreateWithoutPlayersInput;
}
