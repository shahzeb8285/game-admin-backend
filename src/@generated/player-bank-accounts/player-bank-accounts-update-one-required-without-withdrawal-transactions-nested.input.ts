import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './player-bank-accounts-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput } from './player-bank-accounts-create-or-connect-without-withdrawal-transactions.input';
import { player_bank_accountsUpsertWithoutWithdrawal_transactionsInput } from './player-bank-accounts-upsert-without-withdrawal-transactions.input';
import { player_bank_accountsWhereUniqueInput } from './player-bank-accounts-where-unique.input';
import { player_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './player-bank-accounts-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class player_bank_accountsUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput {

    @Field(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => player_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create?: player_bank_accountsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => player_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: player_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => player_bank_accountsUpsertWithoutWithdrawal_transactionsInput)
    upsert?: player_bank_accountsUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    connect?: player_bank_accountsWhereUniqueInput;

    @Field(() => player_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => player_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: player_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
