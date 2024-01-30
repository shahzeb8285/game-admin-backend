import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayUpdateInput } from '../game-records-by-day/game-records-by-day-update.input';
import { Type } from 'class-transformer';
import { game_records_by_dayWhereUniqueInput } from '../game-records-by-day/game-records-by-day-where-unique.input';

@ArgsType()
export class UpdateOnegameRecordsByDayArgs {

    @Field(() => game_records_by_dayUpdateInput, {nullable:false})
    @Type(() => game_records_by_dayUpdateInput)
    data!: game_records_by_dayUpdateInput;

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_dayWhereUniqueInput)
    where!: game_records_by_dayWhereUniqueInput;
}
