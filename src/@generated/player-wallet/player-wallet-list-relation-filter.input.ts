import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletWhereInput } from './player-wallet-where.input';

@InputType()
export class PlayerWalletListRelationFilter {

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    every?: PlayerWalletWhereInput;

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    some?: PlayerWalletWhereInput;

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    none?: PlayerWalletWhereInput;
}
