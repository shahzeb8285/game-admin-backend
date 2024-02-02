import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { withdrawal_transactionsUncheckedUpdateManyWithoutPlayer_bank_accountNestedInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-update-many-without-player-bank-account-nested.input';

@InputType()
export class player_bank_accountsUncheckedUpdateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    player_bank_account_id?: string;

    @Field(() => String, {nullable:true})
    bank_name?: string;

    @Field(() => String, {nullable:true})
    account_number?: string;

    @Field(() => String, {nullable:true})
    holder_name?: string;

    @Field(() => bank_method, {nullable:true})
    method?: keyof typeof bank_method;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => withdrawal_transactionsUncheckedUpdateManyWithoutPlayer_bank_accountNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedUpdateManyWithoutPlayer_bank_accountNestedInput;
}
