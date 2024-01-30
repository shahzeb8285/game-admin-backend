import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { withdrawal_transactionsCreateNestedManyWithoutPlayer_bank_accountInput } from '../withdrawal-transactions/withdrawal-transactions-create-nested-many-without-player-bank-account.input';

@InputType()
export class player_bank_accountsCreateInput {

    @Field(() => String, {nullable:true})
    player_bank_account_id?: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

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

    @Field(() => withdrawal_transactionsCreateNestedManyWithoutPlayer_bank_accountInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsCreateNestedManyWithoutPlayer_bank_accountInput;
}
