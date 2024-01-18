import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Wallet_requestsSumAggregate {

    @Field(() => Int, {nullable:true})
    jackpot_win?: number;
}
