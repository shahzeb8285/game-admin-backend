import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateWithoutPlayer_bank_accountInput } from './withdrawal-transactions-update-without-player-bank-account.input';
import { withdrawal_transactionsCreateWithoutPlayer_bank_accountInput } from './withdrawal-transactions-create-without-player-bank-account.input';

@InputType()
export class withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayer_bank_accountInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsUpdateWithoutPlayer_bank_accountInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateWithoutPlayer_bank_accountInput)
    update!: withdrawal_transactionsUpdateWithoutPlayer_bank_accountInput;

    @Field(() => withdrawal_transactionsCreateWithoutPlayer_bank_accountInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateWithoutPlayer_bank_accountInput)
    create!: withdrawal_transactionsCreateWithoutPlayer_bank_accountInput;
}
