import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateWithoutPlayersInput } from './deposit-transactions-update-without-players.input';
import { deposit_transactionsCreateWithoutPlayersInput } from './deposit-transactions-create-without-players.input';

@InputType()
export class deposit_transactionsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateWithoutPlayersInput)
    update!: deposit_transactionsUpdateWithoutPlayersInput;

    @Field(() => deposit_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => deposit_transactionsCreateWithoutPlayersInput)
    create!: deposit_transactionsCreateWithoutPlayersInput;
}
