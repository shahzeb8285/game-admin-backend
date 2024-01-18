import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestWhereInput } from './wallet-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWalletRequestArgs {

    @Field(() => WalletRequestWhereInput, {nullable:true})
    @Type(() => WalletRequestWhereInput)
    where?: WalletRequestWhereInput;
}
