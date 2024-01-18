import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminBankAccountMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_bank_account_id?: true;

    @Field(() => Boolean, {nullable:true})
    bank_name?: true;

    @Field(() => Boolean, {nullable:true})
    account_number?: true;

    @Field(() => Boolean, {nullable:true})
    holder_name?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    method?: true;
}
