import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Current_active_playersCountAggregate } from './current-active-players-count-aggregate.output';
import { Current_active_playersMinAggregate } from './current-active-players-min-aggregate.output';
import { Current_active_playersMaxAggregate } from './current-active-players-max-aggregate.output';

@ObjectType()
export class AggregateCurrent_active_players {

    @Field(() => Current_active_playersCountAggregate, {nullable:true})
    _count?: Current_active_playersCountAggregate;

    @Field(() => Current_active_playersMinAggregate, {nullable:true})
    _min?: Current_active_playersMinAggregate;

    @Field(() => Current_active_playersMaxAggregate, {nullable:true})
    _max?: Current_active_playersMaxAggregate;
}
