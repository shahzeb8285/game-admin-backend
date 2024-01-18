import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutWithdrawal_transactionsInput } from './players-update-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWithdrawal_transactionsInput } from './players-create-without-withdrawal-transactions.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutWithdrawal_transactionsInput {

    @Field(() => playersUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutWithdrawal_transactionsInput)
    update!: playersUpdateWithoutWithdrawal_transactionsInput;

    @Field(() => playersCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutWithdrawal_transactionsInput)
    create!: playersCreateWithoutWithdrawal_transactionsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
