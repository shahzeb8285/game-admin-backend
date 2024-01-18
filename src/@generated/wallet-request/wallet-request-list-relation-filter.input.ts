import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestWhereInput } from './wallet-request-where.input';

@InputType()
export class WalletRequestListRelationFilter {

    @Field(() => WalletRequestWhereInput, {nullable:true})
    every?: WalletRequestWhereInput;

    @Field(() => WalletRequestWhereInput, {nullable:true})
    some?: WalletRequestWhereInput;

    @Field(() => WalletRequestWhereInput, {nullable:true})
    none?: WalletRequestWhereInput;
}
