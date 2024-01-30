import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayersCountAggregate } from './players-count-aggregate.output';
import { PlayersMinAggregate } from './players-min-aggregate.output';
import { PlayersMaxAggregate } from './players-max-aggregate.output';

@ObjectType()
export class AggregatePlayers {

    @Field(() => PlayersCountAggregate, {nullable:true})
    _count?: PlayersCountAggregate;

    @Field(() => PlayersMinAggregate, {nullable:true})
    _min?: PlayersMinAggregate;

    @Field(() => PlayersMaxAggregate, {nullable:true})
    _max?: PlayersMaxAggregate;
}
