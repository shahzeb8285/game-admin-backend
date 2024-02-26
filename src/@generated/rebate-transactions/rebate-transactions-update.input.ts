import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutRebate_transactionsNestedInput } from '../players/players-update-one-required-without-rebate-transactions-nested.input';

@InputType()
export class rebate_transactionsUpdateInput {

    @Field(() => String, {nullable:true})
    rebate_transaction_id?: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => String, {nullable:true})
    bonus_type?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    trans_date?: Date | string;

    @Field(() => playersUpdateOneRequiredWithoutRebate_transactionsNestedInput, {nullable:true})
    player?: playersUpdateOneRequiredWithoutRebate_transactionsNestedInput;
}
