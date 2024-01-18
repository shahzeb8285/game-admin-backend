import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestCreateInput } from './wallet-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWalletRequestArgs {

    @Field(() => WalletRequestCreateInput, {nullable:false})
    @Type(() => WalletRequestCreateInput)
    data!: WalletRequestCreateInput;
}
