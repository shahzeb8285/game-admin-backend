import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersWhereInput } from '../current-active-players/current-active-players-where.input';
import { Type } from 'class-transformer';
import { current_active_playersOrderByWithAggregationInput } from '../current-active-players/current-active-players-order-by-with-aggregation.input';
import { Current_active_playersScalarFieldEnum } from './current-active-players-scalar-field.enum';
import { current_active_playersScalarWhereWithAggregatesInput } from '../current-active-players/current-active-players-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycurrentActivePlayersArgs {

    @Field(() => current_active_playersWhereInput, {nullable:true})
    @Type(() => current_active_playersWhereInput)
    where?: current_active_playersWhereInput;

    @Field(() => [current_active_playersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<current_active_playersOrderByWithAggregationInput>;

    @Field(() => [Current_active_playersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Current_active_playersScalarFieldEnum>;

    @Field(() => current_active_playersScalarWhereWithAggregatesInput, {nullable:true})
    having?: current_active_playersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
