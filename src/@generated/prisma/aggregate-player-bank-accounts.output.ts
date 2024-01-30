import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Player_bank_accountsCountAggregate } from './player-bank-accounts-count-aggregate.output';
import { Player_bank_accountsMinAggregate } from './player-bank-accounts-min-aggregate.output';
import { Player_bank_accountsMaxAggregate } from './player-bank-accounts-max-aggregate.output';

@ObjectType()
export class AggregatePlayer_bank_accounts {

    @Field(() => Player_bank_accountsCountAggregate, {nullable:true})
    _count?: Player_bank_accountsCountAggregate;

    @Field(() => Player_bank_accountsMinAggregate, {nullable:true})
    _min?: Player_bank_accountsMinAggregate;

    @Field(() => Player_bank_accountsMaxAggregate, {nullable:true})
    _max?: Player_bank_accountsMaxAggregate;
}
