import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestWhereInput } from './wallet-request-where.input';
import { Type } from 'class-transformer';
import { WalletRequestOrderByWithRelationInput } from './wallet-request-order-by-with-relation.input';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WalletRequestScalarFieldEnum } from './wallet-request-scalar-field.enum';

@ArgsType()
export class FindFirstWalletRequestArgs {

    @Field(() => WalletRequestWhereInput, {nullable:true})
    @Type(() => WalletRequestWhereInput)
    where?: WalletRequestWhereInput;

    @Field(() => [WalletRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WalletRequestOrderByWithRelationInput>;

    @Field(() => WalletRequestWhereUniqueInput, {nullable:true})
    cursor?: WalletRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WalletRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WalletRequestScalarFieldEnum>;
}
