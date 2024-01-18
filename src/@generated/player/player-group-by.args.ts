import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerOrderByWithAggregationInput } from './player-order-by-with-aggregation.input';
import { PlayerScalarFieldEnum } from './player-scalar-field.enum';
import { PlayerScalarWhereWithAggregatesInput } from './player-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlayerCountAggregateInput } from './player-count-aggregate.input';
import { PlayerMinAggregateInput } from './player-min-aggregate.input';
import { PlayerMaxAggregateInput } from './player-max-aggregate.input';

@ArgsType()
export class PlayerGroupByArgs {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => [PlayerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlayerOrderByWithAggregationInput>;

    @Field(() => [PlayerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PlayerScalarFieldEnum>;

    @Field(() => PlayerScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlayerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlayerCountAggregateInput, {nullable:true})
    _count?: PlayerCountAggregateInput;

    @Field(() => PlayerMinAggregateInput, {nullable:true})
    _min?: PlayerMinAggregateInput;

    @Field(() => PlayerMaxAggregateInput, {nullable:true})
    _max?: PlayerMaxAggregateInput;
}
