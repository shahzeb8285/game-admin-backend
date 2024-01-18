import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionUpdateWithoutPlayersInput } from './withdrawal-transaction-update-without-players.input';

@InputType()
export class WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: WithdrawalTransactionWhereUniqueInput;

    @Field(() => WithdrawalTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateWithoutPlayersInput)
    data!: WithdrawalTransactionUpdateWithoutPlayersInput;
}
