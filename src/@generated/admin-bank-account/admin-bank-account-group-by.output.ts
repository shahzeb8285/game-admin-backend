import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminBankAccountCountAggregate } from './admin-bank-account-count-aggregate.output';
import { AdminBankAccountMinAggregate } from './admin-bank-account-min-aggregate.output';
import { AdminBankAccountMaxAggregate } from './admin-bank-account-max-aggregate.output';

@ObjectType()
export class AdminBankAccountGroupBy {

    @Field(() => String, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => AdminBankAccountCountAggregate, {nullable:true})
    _count?: AdminBankAccountCountAggregate;

    @Field(() => AdminBankAccountMinAggregate, {nullable:true})
    _min?: AdminBankAccountMinAggregate;

    @Field(() => AdminBankAccountMaxAggregate, {nullable:true})
    _max?: AdminBankAccountMaxAggregate;
}
