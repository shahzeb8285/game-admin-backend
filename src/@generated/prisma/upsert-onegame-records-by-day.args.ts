import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayWhereUniqueInput } from '../game-records-by-day/game-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { game_records_by_dayCreateInput } from '../game-records-by-day/game-records-by-day-create.input';
import { game_records_by_dayUpdateInput } from '../game-records-by-day/game-records-by-day-update.input';

@ArgsType()
export class UpsertOnegameRecordsByDayArgs {

    @Field(() => game_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_dayWhereUniqueInput)
    where!: game_records_by_dayWhereUniqueInput;

    @Field(() => game_records_by_dayCreateInput, {nullable:false})
    @Type(() => game_records_by_dayCreateInput)
    create!: game_records_by_dayCreateInput;

    @Field(() => game_records_by_dayUpdateInput, {nullable:false})
    @Type(() => game_records_by_dayUpdateInput)
    update!: game_records_by_dayUpdateInput;
}
