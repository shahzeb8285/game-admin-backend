import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateWithoutPlayersInput } from './withdrawal-transactions-update-without-players.input';

@InputType()
export class withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateWithoutPlayersInput)
    data!: withdrawal_transactionsUpdateWithoutPlayersInput;
}
