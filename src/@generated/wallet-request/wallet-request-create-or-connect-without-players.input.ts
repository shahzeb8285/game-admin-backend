import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';
import { WalletRequestCreateWithoutPlayersInput } from './wallet-request-create-without-players.input';

@InputType()
export class WalletRequestCreateOrConnectWithoutPlayersInput {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => WalletRequestCreateWithoutPlayersInput, {nullable:false})
    @Type(() => WalletRequestCreateWithoutPlayersInput)
    create!: WalletRequestCreateWithoutPlayersInput;
}
