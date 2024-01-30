import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesWhereInput } from '../player-rebate-rates/player-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesOrderByWithAggregationInput } from '../player-rebate-rates/player-rebate-rates-order-by-with-aggregation.input';
import { Player_rebate_ratesScalarFieldEnum } from './player-rebate-rates-scalar-field.enum';
import { player_rebate_ratesScalarWhereWithAggregatesInput } from '../player-rebate-rates/player-rebate-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_rebate_ratesWhereInput)
    where?: player_rebate_ratesWhereInput;

    @Field(() => [player_rebate_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<player_rebate_ratesOrderByWithAggregationInput>;

    @Field(() => [Player_rebate_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Player_rebate_ratesScalarFieldEnum>;

    @Field(() => player_rebate_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: player_rebate_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
