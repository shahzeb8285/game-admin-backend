import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { playersCreateNestedOneWithoutPlayer_bank_accountsInput } from '../players/players-create-nested-one-without-player-bank-accounts.input';

@InputType()
export class player_bank_accountsCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    player_bank_account_id?: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => bank_method, {nullable:false})
    method!: keyof typeof bank_method;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => playersCreateNestedOneWithoutPlayer_bank_accountsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutPlayer_bank_accountsInput;
}
