import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateInput } from './withdrawal-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionCreateInput, {nullable:false})
    @Type(() => WithdrawalTransactionCreateInput)
    data!: WithdrawalTransactionCreateInput;
}
