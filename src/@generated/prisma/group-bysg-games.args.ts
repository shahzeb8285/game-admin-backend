import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';
import { Type } from 'class-transformer';
import { sg_gamesOrderByWithAggregationInput } from '../sg-games/sg-games-order-by-with-aggregation.input';
import { Sg_gamesScalarFieldEnum } from './sg-games-scalar-field.enum';
import { sg_gamesScalarWhereWithAggregatesInput } from '../sg-games/sg-games-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysgGamesArgs {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;

    @Field(() => [sg_gamesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sg_gamesOrderByWithAggregationInput>;

    @Field(() => [Sg_gamesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Sg_gamesScalarFieldEnum>;

    @Field(() => sg_gamesScalarWhereWithAggregatesInput, {nullable:true})
    having?: sg_gamesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
