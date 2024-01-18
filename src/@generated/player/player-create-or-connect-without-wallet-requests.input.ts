import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutWallet_requestsInput } from './player-create-without-wallet-requests.input';

@InputType()
export class PlayerCreateOrConnectWithoutWallet_requestsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: PlayerWhereUniqueInput;

    @Field(() => PlayerCreateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutWallet_requestsInput)
    create!: PlayerCreateWithoutWallet_requestsInput;
}
