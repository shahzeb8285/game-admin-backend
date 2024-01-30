import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Wallet_requestsAvgAggregate {

    @Field(() => Float, {nullable:true})
    jackpot_win?: number;
}
