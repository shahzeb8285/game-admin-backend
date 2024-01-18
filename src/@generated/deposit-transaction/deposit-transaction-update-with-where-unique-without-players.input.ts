import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionUpdateWithoutPlayersInput } from './deposit-transaction-update-without-players.input';

@InputType()
export class DepositTransactionUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: DepositTransactionWhereUniqueInput;

    @Field(() => DepositTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => DepositTransactionUpdateWithoutPlayersInput)
    data!: DepositTransactionUpdateWithoutPlayersInput;
}
