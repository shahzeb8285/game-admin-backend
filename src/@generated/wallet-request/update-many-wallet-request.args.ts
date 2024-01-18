import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestUpdateManyMutationInput } from './wallet-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WalletRequestWhereInput } from './wallet-request-where.input';

@ArgsType()
export class UpdateManyWalletRequestArgs {

    @Field(() => WalletRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => WalletRequestUpdateManyMutationInput)
    data!: WalletRequestUpdateManyMutationInput;

    @Field(() => WalletRequestWhereInput, {nullable:true})
    @Type(() => WalletRequestWhereInput)
    where?: WalletRequestWhereInput;
}
