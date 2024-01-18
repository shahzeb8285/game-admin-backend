import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDepositTransactionOrThrowArgs {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: DepositTransactionWhereUniqueInput;
}
