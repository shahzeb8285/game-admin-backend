import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BanksCountAggregate } from './banks-count-aggregate.output';
import { BanksMinAggregate } from './banks-min-aggregate.output';
import { BanksMaxAggregate } from './banks-max-aggregate.output';

@ObjectType()
export class AggregateBanks {

    @Field(() => BanksCountAggregate, {nullable:true})
    _count?: BanksCountAggregate;

    @Field(() => BanksMinAggregate, {nullable:true})
    _min?: BanksMinAggregate;

    @Field(() => BanksMaxAggregate, {nullable:true})
    _max?: BanksMaxAggregate;
}
