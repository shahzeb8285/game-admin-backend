import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodWhereInput } from '../game-records-by-period/game-records-by-period-where.input';
import { Type } from 'class-transformer';
import { game_records_by_periodOrderByWithAggregationInput } from '../game-records-by-period/game-records-by-period-order-by-with-aggregation.input';
import { Game_records_by_periodScalarFieldEnum } from './game-records-by-period-scalar-field.enum';
import { game_records_by_periodScalarWhereWithAggregatesInput } from '../game-records-by-period/game-records-by-period-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    @Type(() => game_records_by_periodWhereInput)
    where?: game_records_by_periodWhereInput;

    @Field(() => [game_records_by_periodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_records_by_periodOrderByWithAggregationInput>;

    @Field(() => [Game_records_by_periodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_records_by_periodScalarFieldEnum>;

    @Field(() => game_records_by_periodScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_records_by_periodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
