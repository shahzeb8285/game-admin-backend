import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodUpdateInput } from '../game-records-by-period/game-records-by-period-update.input';
import { Type } from 'class-transformer';
import { game_records_by_periodWhereUniqueInput } from '../game-records-by-period/game-records-by-period-where-unique.input';

@ArgsType()
export class UpdateOnegameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodUpdateInput, {nullable:false})
    @Type(() => game_records_by_periodUpdateInput)
    data!: game_records_by_periodUpdateInput;

    @Field(() => game_records_by_periodWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_periodWhereUniqueInput)
    where!: game_records_by_periodWhereUniqueInput;
}
