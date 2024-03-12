import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereInput } from '../player-default-rebate-rates/player-default-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesOrderByWithAggregationInput } from '../player-default-rebate-rates/player-default-rebate-rates-order-by-with-aggregation.input';
import { Player_default_rebate_ratesScalarFieldEnum } from './player-default-rebate-rates-scalar-field.enum';
import { player_default_rebate_ratesScalarWhereWithAggregatesInput } from '../player-default-rebate-rates/player-default-rebate-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_default_rebate_ratesWhereInput)
    where?: player_default_rebate_ratesWhereInput;

    @Field(() => [player_default_rebate_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<player_default_rebate_ratesOrderByWithAggregationInput>;

    @Field(() => [Player_default_rebate_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Player_default_rebate_ratesScalarFieldEnum>;

    @Field(() => player_default_rebate_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: player_default_rebate_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
