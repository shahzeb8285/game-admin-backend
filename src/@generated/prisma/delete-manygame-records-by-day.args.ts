import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayWhereInput } from '../game-records-by-day/game-records-by-day-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameRecordsByDayArgs {

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    @Type(() => game_records_by_dayWhereInput)
    where?: game_records_by_dayWhereInput;
}
