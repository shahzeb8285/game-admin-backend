import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateWithoutPlayersInput } from './withdrawal-transaction-create-without-players.input';

@InputType()
export class WithdrawalTransactionCreateOrConnectWithoutPlayersInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: WithdrawalTransactionWhereUniqueInput;

    @Field(() => WithdrawalTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => WithdrawalTransactionCreateWithoutPlayersInput)
    create!: WithdrawalTransactionCreateWithoutPlayersInput;
}
