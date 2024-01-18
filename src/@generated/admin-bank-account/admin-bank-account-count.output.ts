import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminBankAccountCount {

    @Field(() => Int, {nullable:false})
    deposit_transactions?: number;

    @Field(() => Int, {nullable:false})
    withdrawal_transactions?: number;
}
