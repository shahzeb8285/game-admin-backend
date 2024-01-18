import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsWhereUniqueInput } from './wallet-requests-where-unique.input';
import { Type } from 'class-transformer';
import { wallet_requestsUpdateWithoutPlayersInput } from './wallet-requests-update-without-players.input';
import { wallet_requestsCreateWithoutPlayersInput } from './wallet-requests-create-without-players.input';

@InputType()
export class wallet_requestsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: wallet_requestsWhereUniqueInput;

    @Field(() => wallet_requestsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => wallet_requestsUpdateWithoutPlayersInput)
    update!: wallet_requestsUpdateWithoutPlayersInput;

    @Field(() => wallet_requestsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => wallet_requestsCreateWithoutPlayersInput)
    create!: wallet_requestsCreateWithoutPlayersInput;
}
