import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';
import { WalletRequestUpdateWithoutPlayersInput } from './wallet-request-update-without-players.input';

@InputType()
export class WalletRequestUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => WalletRequestUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => WalletRequestUpdateWithoutPlayersInput)
    data!: WalletRequestUpdateWithoutPlayersInput;
}
