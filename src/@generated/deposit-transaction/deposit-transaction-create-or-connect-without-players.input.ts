import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateWithoutPlayersInput } from './deposit-transaction-create-without-players.input';

@InputType()
export class DepositTransactionCreateOrConnectWithoutPlayersInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: DepositTransactionWhereUniqueInput;

    @Field(() => DepositTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => DepositTransactionCreateWithoutPlayersInput)
    create!: DepositTransactionCreateWithoutPlayersInput;
}
