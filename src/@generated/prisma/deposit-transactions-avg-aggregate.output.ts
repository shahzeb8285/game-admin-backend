import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Deposit_transactionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    transaction_amount?: number;

    @Field(() => Float, {nullable:true})
    game_amount?: number;
}
