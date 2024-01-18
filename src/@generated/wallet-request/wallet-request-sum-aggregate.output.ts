import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WalletRequestSumAggregate {

    @Field(() => Int, {nullable:true})
    jackpot_win?: number;
}
