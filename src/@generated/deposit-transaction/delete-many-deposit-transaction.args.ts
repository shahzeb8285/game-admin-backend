import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDepositTransactionArgs {

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    @Type(() => DepositTransactionWhereInput)
    where?: DepositTransactionWhereInput;
}
