import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsUpdateWithoutWithdrawal_transactionsInput } from './player-bank-accounts-update-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './player-bank-accounts-create-without-withdrawal-transactions.input';
import { player_bank_accountsWhereInput } from './player-bank-accounts-where.input';

@InputType()
export class player_bank_accountsUpsertWithoutWithdrawal_transactionsInput {

    @Field(() => player_bank_accountsUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateWithoutWithdrawal_transactionsInput)
    update!: player_bank_accountsUpdateWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create!: player_bank_accountsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    @Type(() => player_bank_accountsWhereInput)
    where?: player_bank_accountsWhereInput;
}
