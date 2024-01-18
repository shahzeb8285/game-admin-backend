import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_bank_accountsCountAggregate } from './admin-bank-accounts-count-aggregate.output';
import { Admin_bank_accountsMinAggregate } from './admin-bank-accounts-min-aggregate.output';
import { Admin_bank_accountsMaxAggregate } from './admin-bank-accounts-max-aggregate.output';

@ObjectType()
export class AggregateAdmin_bank_accounts {

    @Field(() => Admin_bank_accountsCountAggregate, {nullable:true})
    _count?: Admin_bank_accountsCountAggregate;

    @Field(() => Admin_bank_accountsMinAggregate, {nullable:true})
    _min?: Admin_bank_accountsMinAggregate;

    @Field(() => Admin_bank_accountsMaxAggregate, {nullable:true})
    _max?: Admin_bank_accountsMaxAggregate;
}
