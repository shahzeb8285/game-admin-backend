import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Rebate_transactionsSumAggregate {

    @Field(() => Int, {nullable:true})
    amount?: number;
}
