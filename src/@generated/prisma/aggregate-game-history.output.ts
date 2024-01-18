import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Game_historyCountAggregate } from './game-history-count-aggregate.output';
import { Game_historyAvgAggregate } from './game-history-avg-aggregate.output';
import { Game_historySumAggregate } from './game-history-sum-aggregate.output';
import { Game_historyMinAggregate } from './game-history-min-aggregate.output';
import { Game_historyMaxAggregate } from './game-history-max-aggregate.output';

@ObjectType()
export class AggregateGame_history {

    @Field(() => Game_historyCountAggregate, {nullable:true})
    _count?: Game_historyCountAggregate;

    @Field(() => Game_historyAvgAggregate, {nullable:true})
    _avg?: Game_historyAvgAggregate;

    @Field(() => Game_historySumAggregate, {nullable:true})
    _sum?: Game_historySumAggregate;

    @Field(() => Game_historyMinAggregate, {nullable:true})
    _min?: Game_historyMinAggregate;

    @Field(() => Game_historyMaxAggregate, {nullable:true})
    _max?: Game_historyMaxAggregate;
}
