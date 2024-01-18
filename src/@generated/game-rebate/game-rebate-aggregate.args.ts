import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';
import { Type } from 'class-transformer';
import { GameRebateOrderByWithRelationInput } from './game-rebate-order-by-with-relation.input';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameRebateCountAggregateInput } from './game-rebate-count-aggregate.input';
import { GameRebateAvgAggregateInput } from './game-rebate-avg-aggregate.input';
import { GameRebateSumAggregateInput } from './game-rebate-sum-aggregate.input';
import { GameRebateMinAggregateInput } from './game-rebate-min-aggregate.input';
import { GameRebateMaxAggregateInput } from './game-rebate-max-aggregate.input';

@ArgsType()
export class GameRebateAggregateArgs {

    @Field(() => GameRebateWhereInput, {nullable:true})
    @Type(() => GameRebateWhereInput)
    where?: GameRebateWhereInput;

    @Field(() => [GameRebateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameRebateOrderByWithRelationInput>;

    @Field(() => GameRebateWhereUniqueInput, {nullable:true})
    cursor?: GameRebateWhereUniqueInput;

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
