import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';

@InputType()
export class WithdrawalTransactionListRelationFilter {

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    every?: WithdrawalTransactionWhereInput;

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    some?: WithdrawalTransactionWhereInput;

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    none?: WithdrawalTransactionWhereInput;
}
