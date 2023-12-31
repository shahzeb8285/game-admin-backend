import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { wallet_requestsWhereUniqueInput } from './wallet-requests-where-unique.input';
import { Type } from 'class-transformer';
import { wallet_requestsUpdateWithoutPlayersInput } from './wallet-requests-update-without-players.input';

@InputType()
export class wallet_requestsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: Prisma.AtLeast<wallet_requestsWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => wallet_requestsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => wallet_requestsUpdateWithoutPlayersInput)
    data!: wallet_requestsUpdateWithoutPlayersInput;
}
