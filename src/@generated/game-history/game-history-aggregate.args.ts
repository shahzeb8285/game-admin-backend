import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';
import { GameHistoryOrderByWithRelationInput } from './game-history-order-by-with-relation.input';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameHistoryCountAggregateInput } from './game-history-count-aggregate.input';
import { GameHistoryAvgAggregateInput } from './game-history-avg-aggregate.input';
import { GameHistorySumAggregateInput } from './game-history-sum-aggregate.input';
import { GameHistoryMinAggregateInput } from './game-history-min-aggregate.input';
import { GameHistoryMaxAggregateInput } from './game-history-max-aggregate.input';

@ArgsType()
export class GameHistoryAggregateArgs {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;

    @Field(() => [GameHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameHistoryOrderByWithRelationInput>;

    @Field(() => GameHistoryWhereUniqueInput, {nullable:true})
    cursor?: GameHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameHistoryCountAggregateInput, {nullable:true})
    _count?: GameHistoryCountAggregateInput;

    @Field(() => GameHistoryAvgAggregateInput, {nullable:true})
    _avg?: GameHistoryAvgAggregateInput;

    @Field(() => GameHistorySumAggregateInput, {nullable:true})
    _sum?: GameHistorySumAggregateInput;

    @Field(() => GameHistoryMinAggregateInput, {nullable:true})
    _min?: GameHistoryMinAggregateInput;

    @Field(() => GameHistoryMaxAggregateInput, {nullable:true})
    _max?: GameHistoryMaxAggregateInput;
}
