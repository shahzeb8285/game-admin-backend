import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateInput } from './withdrawal-transaction-create.input';
import { WithdrawalTransactionUpdateInput } from './withdrawal-transaction-update.input';

@ArgsType()
export class UpsertOneWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: WithdrawalTransactionWhereUniqueInput;

    @Field(() => WithdrawalTransactionCreateInput, {nullable:false})
    @Type(() => WithdrawalTransactionCreateInput)
    create!: WithdrawalTransactionCreateInput;

    @Field(() => WithdrawalTransactionUpdateInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateInput)
    update!: WithdrawalTransactionUpdateInput;
}
