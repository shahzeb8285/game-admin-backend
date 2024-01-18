import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateWithoutPlayersInput } from './withdrawal-transactions-create-without-players.input';

@InputType()
export class withdrawal_transactionsCreateOrConnectWithoutPlayersInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateWithoutPlayersInput)
    create!: withdrawal_transactionsCreateWithoutPlayersInput;
}
