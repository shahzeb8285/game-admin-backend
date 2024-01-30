import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';
import { Type } from 'class-transformer';
import { game_record_roundsOrderByWithAggregationInput } from '../game-record-rounds/game-record-rounds-order-by-with-aggregation.input';
import { Game_record_roundsScalarFieldEnum } from './game-record-rounds-scalar-field.enum';
import { game_record_roundsScalarWhereWithAggregatesInput } from '../game-record-rounds/game-record-rounds-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameRecordRoundsArgs {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;

    @Field(() => [game_record_roundsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_record_roundsOrderByWithAggregationInput>;

    @Field(() => [Game_record_roundsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_record_roundsScalarFieldEnum>;

    @Field(() => game_record_roundsScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_record_roundsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
