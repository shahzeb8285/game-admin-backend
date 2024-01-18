import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrentActivePlayersCountAggregate } from './current-active-players-count-aggregate.output';
import { CurrentActivePlayersMinAggregate } from './current-active-players-min-aggregate.output';
import { CurrentActivePlayersMaxAggregate } from './current-active-players-max-aggregate.output';

@ObjectType()
export class AggregateCurrentActivePlayers {

    @Field(() => CurrentActivePlayersCountAggregate, {nullable:true})
    _count?: CurrentActivePlayersCountAggregate;

    @Field(() => CurrentActivePlayersMinAggregate, {nullable:true})
    _min?: CurrentActivePlayersMinAggregate;

    @Field(() => CurrentActivePlayersMaxAggregate, {nullable:true})
    _max?: CurrentActivePlayersMaxAggregate;
}
