import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';

@ObjectType()
export class Admin_bank_accountsMaxAggregate {

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

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
}
