import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayCreateInput } from '../game-records-by-day/game-records-by-day-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameRecordsByDayArgs {

    @Field(() => game_records_by_dayCreateInput, {nullable:false})
    @Type(() => game_records_by_dayCreateInput)
    data!: game_records_by_dayCreateInput;
}
