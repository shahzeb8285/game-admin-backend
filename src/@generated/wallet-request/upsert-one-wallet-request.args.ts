import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';
import { WalletRequestCreateInput } from './wallet-request-create.input';
import { WalletRequestUpdateInput } from './wallet-request-update.input';

@ArgsType()
export class UpsertOneWalletRequestArgs {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>;

    @Field(() => WalletRequestCreateInput, {nullable:false})
    @Type(() => WalletRequestCreateInput)
    create!: WalletRequestCreateInput;

    @Field(() => WalletRequestUpdateInput, {nullable:false})
    @Type(() => WalletRequestUpdateInput)
    update!: WalletRequestUpdateInput;
}