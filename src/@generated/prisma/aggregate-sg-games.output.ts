import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Sg_gamesCountAggregate } from './sg-games-count-aggregate.output';
import { Sg_gamesAvgAggregate } from './sg-games-avg-aggregate.output';
import { Sg_gamesSumAggregate } from './sg-games-sum-aggregate.output';
import { Sg_gamesMinAggregate } from './sg-games-min-aggregate.output';
import { Sg_gamesMaxAggregate } from './sg-games-max-aggregate.output';

@ObjectType()
export class AggregateSg_games {

    @Field(() => Sg_gamesCountAggregate, {nullable:true})
    _count?: Sg_gamesCountAggregate;

    @Field(() => Sg_gamesAvgAggregate, {nullable:true})
    _avg?: Sg_gamesAvgAggregate;

    @Field(() => Sg_gamesSumAggregate, {nullable:true})
    _sum?: Sg_gamesSumAggregate;

    @Field(() => Sg_gamesMinAggregate, {nullable:true})
    _min?: Sg_gamesMinAggregate;

    @Field(() => Sg_gamesMaxAggregate, {nullable:true})
    _max?: Sg_gamesMaxAggregate;
}
