import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayWhereUniqueInput } from '../game-records-by-day/game-records-by-day-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegameRecordsByDayArgs {

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_dayWhereUniqueInput)
    where!: game_records_by_dayWhereUniqueInput;
}
