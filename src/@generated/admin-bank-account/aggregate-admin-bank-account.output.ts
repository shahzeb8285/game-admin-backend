import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminBankAccountCountAggregate } from './admin-bank-account-count-aggregate.output';
import { AdminBankAccountMinAggregate } from './admin-bank-account-min-aggregate.output';
import { AdminBankAccountMaxAggregate } from './admin-bank-account-max-aggregate.output';

@ObjectType()
export class AggregateAdminBankAccount {

    @Field(() => AdminBankAccountCountAggregate, {nullable:true})
    _count?: AdminBankAccountCountAggregate;

    @Field(() => AdminBankAccountMinAggregate, {nullable:true})
    _min?: AdminBankAccountMinAggregate;

    @Field(() => AdminBankAccountMaxAggregate, {nullable:true})
    _max?: AdminBankAccountMaxAggregate;
}
