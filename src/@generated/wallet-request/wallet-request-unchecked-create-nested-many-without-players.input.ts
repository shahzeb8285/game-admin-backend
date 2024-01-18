import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestCreateWithoutPlayersInput } from './wallet-request-create-without-players.input';
import { Type } from 'class-transformer';
import { WalletRequestCreateOrConnectWithoutPlayersInput } from './wallet-request-create-or-connect-without-players.input';
import { WalletRequestCreateManyPlayersInputEnvelope } from './wallet-request-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';

@InputType()
export class WalletRequestUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [WalletRequestCreateWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestCreateWithoutPlayersInput)
    create?: Array<WalletRequestCreateWithoutPlayersInput>;

    @Field(() => [WalletRequestCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<WalletRequestCreateOrConnectWithoutPlayersInput>;

    @Field(() => WalletRequestCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => WalletRequestCreateManyPlayersInputEnvelope)
    createMany?: WalletRequestCreateManyPlayersInputEnvelope;

    @Field(() => [WalletRequestWhereUniqueInput], {nullable:true})
    @Type(() => WalletRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>>;
}
