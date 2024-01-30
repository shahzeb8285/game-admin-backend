import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Player_bank_accountsCount {

    @Field(() => Int, {nullable:false})
    withdrawal_transactions!: number;
}
