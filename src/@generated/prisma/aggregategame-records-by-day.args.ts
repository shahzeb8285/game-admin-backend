import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayWhereInput } from '../game-records-by-day/game-records-by-day-where.input';
import { Type } from 'class-transformer';
import { game_records_by_dayOrderByWithRelationInput } from '../game-records-by-day/game-records-by-day-order-by-with-relation.input';
import { game_records_by_dayWhereUniqueInput } from '../game-records-by-day/game-records-by-day-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregategameRecordsByDayArgs {

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    @Type(() => game_records_by_dayWhereInput)
    where?: game_records_by_dayWhereInput;

    @Field(() => [game_records_by_dayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_records_by_dayOrderByWithRelationInput>;

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:true})
    cursor?: game_records_by_dayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
