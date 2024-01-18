import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayerCountAggregate } from './player-count-aggregate.output';
import { PlayerMinAggregate } from './player-min-aggregate.output';
import { PlayerMaxAggregate } from './player-max-aggregate.output';

@ObjectType()
export class AggregatePlayer {

    @Field(() => PlayerCountAggregate, {nullable:true})
    _count?: PlayerCountAggregate;

    @Field(() => PlayerMinAggregate, {nullable:true})
    _min?: PlayerMinAggregate;

    @Field(() => PlayerMaxAggregate, {nullable:true})
    _max?: PlayerMaxAggregate;
}
