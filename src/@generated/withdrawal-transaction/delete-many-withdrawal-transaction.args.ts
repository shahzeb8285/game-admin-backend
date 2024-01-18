import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    @Type(() => WithdrawalTransactionWhereInput)
    where?: WithdrawalTransactionWhereInput;
}
