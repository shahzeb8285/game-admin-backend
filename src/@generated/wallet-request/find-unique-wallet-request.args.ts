import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWalletRequestArgs {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: Prisma.AtLeast<WalletRequestWhereUniqueInput, 'wallet_request_id'>;
}
