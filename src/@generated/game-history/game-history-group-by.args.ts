import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';
import { GameHistoryOrderByWithAggregationInput } from './game-history-order-by-with-aggregation.input';
import { GameHistoryScalarFieldEnum } from './game-history-scalar-field.enum';
import { GameHistoryScalarWhereWithAggregatesInput } from './game-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameHistoryCountAggregateInput } from './game-history-count-aggregate.input';
import { GameHistoryAvgAggregateInput } from './game-history-avg-aggregate.input';
import { GameHistorySumAggregateInput } from './game-history-sum-aggregate.input';
import { GameHistoryMinAggregateInput } from './game-history-min-aggregate.input';
import { GameHistoryMaxAggregateInput } from './game-history-max-aggregate.input';

@ArgsType()
export class GameHistoryGroupByArgs {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;

    @Field(() => [GameHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameHistoryOrderByWithAggregationInput>;

    @Field(() => [GameHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameHistoryScalarFieldEnum>;

    @Field(() => GameHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameHistoryScalarWhereWithAggregatesInput;

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
