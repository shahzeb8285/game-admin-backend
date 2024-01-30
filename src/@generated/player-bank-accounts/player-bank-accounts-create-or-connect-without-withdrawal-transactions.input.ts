import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsWhereUniqueInput } from './player-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './player-bank-accounts-create-without-withdrawal-transactions.input';

@InputType()
export class player_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => player_bank_accountsWhereUniqueInput)
    where!: player_bank_accountsWhereUniqueInput;

    @Field(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create!: player_bank_accountsCreateWithoutWithdrawal_transactionsInput;
}
