import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';
import { Admin_bank_accountsCountAggregate } from './admin-bank-accounts-count-aggregate.output';
import { Admin_bank_accountsMinAggregate } from './admin-bank-accounts-min-aggregate.output';
import { Admin_bank_accountsMaxAggregate } from './admin-bank-accounts-max-aggregate.output';

@ObjectType()
export class Admin_bank_accountsGroupBy {

    @Field(() => String, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => bank_method, {nullable:false})
    method!: keyof typeof bank_method;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Admin_bank_accountsCountAggregate, {nullable:true})
    _count?: Admin_bank_accountsCountAggregate;

    @Field(() => Admin_bank_accountsMinAggregate, {nullable:true})
    _min?: Admin_bank_accountsMinAggregate;

    @Field(() => Admin_bank_accountsMaxAggregate, {nullable:true})
    _max?: Admin_bank_accountsMaxAggregate;
}
