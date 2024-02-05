import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Rebate_transactionsMinAggregate {

    @Field(() => String, {nullable:true})
    rebate_transaction_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => String, {nullable:true})
    bonus_type?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
