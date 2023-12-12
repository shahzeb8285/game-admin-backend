import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Withdrawal_transactionsSumAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;
}
