import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlayerWalletCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    player_wallet_id?: true;

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    frozen_amount?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    udate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
