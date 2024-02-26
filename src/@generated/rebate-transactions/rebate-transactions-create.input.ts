import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutRebate_transactionsInput } from '../players/players-create-nested-one-without-rebate-transactions.input';

@InputType()
export class rebate_transactionsCreateInput {

    @Field(() => String, {nullable:true})
    rebate_transaction_id?: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => String, {nullable:true})
    bonus_type?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    trans_date!: Date | string;

    @Field(() => playersCreateNestedOneWithoutRebate_transactionsInput, {nullable:false})
    player!: playersCreateNestedOneWithoutRebate_transactionsInput;
}
