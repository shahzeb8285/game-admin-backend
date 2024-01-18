import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestUpdateInput } from './wallet-request-update.input';
import { Type } from 'class-transformer';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';

@ArgsType()
export class UpdateOneWalletRequestArgs {

    @Field(() => WalletRequestUpdateInput, {nullable:false})
    @Type(() => WalletRequestUpdateInput)
    data!: WalletRequestUpdateInput;

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: WalletRequestWhereUniqueInput;
}
