import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersOrderByWithAggregationInput } from './players-order-by-with-aggregation.input';
import { PlayersScalarFieldEnum } from '../prisma/players-scalar-field.enum';
import { playersScalarWhereWithAggregatesInput } from './players-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class playersGroupByArgs {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => [playersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<playersOrderByWithAggregationInput>;

    @Field(() => [PlayersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PlayersScalarFieldEnum>;

    @Field(() => playersScalarWhereWithAggregatesInput, {nullable:true})
    having?: playersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
