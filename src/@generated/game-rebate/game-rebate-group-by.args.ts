import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';
import { Type } from 'class-transformer';
import { GameRebateOrderByWithAggregationInput } from './game-rebate-order-by-with-aggregation.input';
import { GameRebateScalarFieldEnum } from './game-rebate-scalar-field.enum';
import { GameRebateScalarWhereWithAggregatesInput } from './game-rebate-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameRebateCountAggregateInput } from './game-rebate-count-aggregate.input';
import { GameRebateAvgAggregateInput } from './game-rebate-avg-aggregate.input';
import { GameRebateSumAggregateInput } from './game-rebate-sum-aggregate.input';
import { GameRebateMinAggregateInput } from './game-rebate-min-aggregate.input';
import { GameRebateMaxAggregateInput } from './game-rebate-max-aggregate.input';

@ArgsType()
export class GameRebateGroupByArgs {

    @Field(() => GameRebateWhereInput, {nullable:true})
    @Type(() => GameRebateWhereInput)
    where?: GameRebateWhereInput;

    @Field(() => [GameRebateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameRebateOrderByWithAggregationInput>;

    @Field(() => [GameRebateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameRebateScalarFieldEnum>;

    @Field(() => GameRebateScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameRebateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameRebateCountAggregateInput, {nullable:true})
    _count?: GameRebateCountAggregateInput;

    @Field(() => GameRebateAvgAggregateInput, {nullable:true})
    _avg?: GameRebateAvgAggregateInput;

    @Field(() => GameRebateSumAggregateInput, {nullable:true})
    _sum?: GameRebateSumAggregateInput;

    @Field(() => GameRebateMinAggregateInput, {nullable:true})
    _min?: GameRebateMinAggregateInput;

    @Field(() => GameRebateMaxAggregateInput, {nullable:true})
    _max?: GameRebateMaxAggregateInput;
}
