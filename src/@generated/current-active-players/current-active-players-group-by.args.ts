import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersOrderByWithAggregationInput } from './current-active-players-order-by-with-aggregation.input';
import { CurrentActivePlayersScalarFieldEnum } from './current-active-players-scalar-field.enum';
import { CurrentActivePlayersScalarWhereWithAggregatesInput } from './current-active-players-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CurrentActivePlayersCountAggregateInput } from './current-active-players-count-aggregate.input';
import { CurrentActivePlayersMinAggregateInput } from './current-active-players-min-aggregate.input';
import { CurrentActivePlayersMaxAggregateInput } from './current-active-players-max-aggregate.input';

@ArgsType()
export class CurrentActivePlayersGroupByArgs {

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    @Type(() => CurrentActivePlayersWhereInput)
    where?: CurrentActivePlayersWhereInput;

    @Field(() => [CurrentActivePlayersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CurrentActivePlayersOrderByWithAggregationInput>;

    @Field(() => [CurrentActivePlayersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CurrentActivePlayersScalarFieldEnum>;

    @Field(() => CurrentActivePlayersScalarWhereWithAggregatesInput, {nullable:true})
    having?: CurrentActivePlayersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CurrentActivePlayersCountAggregateInput, {nullable:true})
    _count?: CurrentActivePlayersCountAggregateInput;

    @Field(() => CurrentActivePlayersMinAggregateInput, {nullable:true})
    _min?: CurrentActivePlayersMinAggregateInput;

    @Field(() => CurrentActivePlayersMaxAggregateInput, {nullable:true})
    _max?: CurrentActivePlayersMaxAggregateInput;
}
