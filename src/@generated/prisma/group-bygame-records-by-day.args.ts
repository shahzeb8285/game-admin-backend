import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayWhereInput } from '../game-records-by-day/game-records-by-day-where.input';
import { Type } from 'class-transformer';
import { game_records_by_dayOrderByWithAggregationInput } from '../game-records-by-day/game-records-by-day-order-by-with-aggregation.input';
import { Game_records_by_dayScalarFieldEnum } from './game-records-by-day-scalar-field.enum';
import { game_records_by_dayScalarWhereWithAggregatesInput } from '../game-records-by-day/game-records-by-day-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameRecordsByDayArgs {

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    @Type(() => game_records_by_dayWhereInput)
    where?: game_records_by_dayWhereInput;

    @Field(() => [game_records_by_dayOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_records_by_dayOrderByWithAggregationInput>;

    @Field(() => [Game_records_by_dayScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_records_by_dayScalarFieldEnum>;

    @Field(() => game_records_by_dayScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_records_by_dayScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
