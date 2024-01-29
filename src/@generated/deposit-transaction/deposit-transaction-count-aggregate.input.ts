import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DepositTransactionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    deposit_transaction_id?: true;

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    request_time?: true;

    @Field(() => Boolean, {nullable:true})
    process_time?: true;

    @Field(() => Boolean, {nullable:true})
    processed_by?: true;

    @Field(() => Boolean, {nullable:true})
    transaction_date?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    admin_bank_account_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
