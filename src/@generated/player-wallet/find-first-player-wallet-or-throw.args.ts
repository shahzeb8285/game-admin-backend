import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletWhereInput } from './player-wallet-where.input';
import { Type } from 'class-transformer';
import { PlayerWalletOrderByWithRelationInput } from './player-wallet-order-by-with-relation.input';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerWalletScalarFieldEnum } from './player-wallet-scalar-field.enum';

@ArgsType()
export class FindFirstPlayerWalletOrThrowArgs {

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    @Type(() => PlayerWalletWhereInput)
    where?: PlayerWalletWhereInput;

    @Field(() => [PlayerWalletOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerWalletOrderByWithRelationInput>;

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:true})
    cursor?: PlayerWalletWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlayerWalletScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlayerWalletScalarFieldEnum>;
}
