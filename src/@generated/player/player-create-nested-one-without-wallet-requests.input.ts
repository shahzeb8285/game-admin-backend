import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutWallet_requestsInput } from './player-create-without-wallet-requests.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutWallet_requestsInput } from './player-create-or-connect-without-wallet-requests.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutWallet_requestsInput {

    @Field(() => PlayerCreateWithoutWallet_requestsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutWallet_requestsInput)
    create?: PlayerCreateWithoutWallet_requestsInput;

    @Field(() => PlayerCreateOrConnectWithoutWallet_requestsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutWallet_requestsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutWallet_requestsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
