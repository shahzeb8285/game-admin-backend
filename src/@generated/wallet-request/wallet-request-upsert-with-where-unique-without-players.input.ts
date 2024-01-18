import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';
import { WalletRequestUpdateWithoutPlayersInput } from './wallet-request-update-without-players.input';
import { WalletRequestCreateWithoutPlayersInput } from './wallet-request-create-without-players.input';

@InputType()
export class WalletRequestUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => WalletRequestUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => WalletRequestUpdateWithoutPlayersInput)
    update!: WalletRequestUpdateWithoutPlayersInput;

    @Field(() => WalletRequestCreateWithoutPlayersInput, {nullable:false})
    @Type(() => WalletRequestCreateWithoutPlayersInput)
    create!: WalletRequestCreateWithoutPlayersInput;
}
