import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateWithoutPlayersInput } from './deposit-transactions-update-without-players.input';

@InputType()
export class deposit_transactionsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateWithoutPlayersInput)
    data!: deposit_transactionsUpdateWithoutPlayersInput;
}
