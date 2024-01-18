import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';

@InputType()
export class DepositTransactionListRelationFilter {

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    every?: DepositTransactionWhereInput;

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    some?: DepositTransactionWhereInput;

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    none?: DepositTransactionWhereInput;
}
