import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { playersUpdateOneRequiredWithoutPlayer_bank_accountsNestedInput } from '../players/players-update-one-required-without-player-bank-accounts-nested.input';

@InputType()
export class player_bank_accountsUpdateWithoutWithdrawal_transactionsInput {

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

    @Field(() => playersUpdateOneRequiredWithoutPlayer_bank_accountsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutPlayer_bank_accountsNestedInput;
}
