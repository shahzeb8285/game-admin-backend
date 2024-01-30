import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodWhereUniqueInput } from '../game-records-by-period/game-records-by-period-where-unique.input';
import { Type } from 'class-transformer';
import { game_records_by_periodCreateInput } from '../game-records-by-period/game-records-by-period-create.input';
import { game_records_by_periodUpdateInput } from '../game-records-by-period/game-records-by-period-update.input';

@ArgsType()
export class UpsertOnegameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_periodWhereUniqueInput)
    where!: game_records_by_periodWhereUniqueInput;

    @Field(() => game_records_by_periodCreateInput, {nullable:false})
    @Type(() => game_records_by_periodCreateInput)
    create!: game_records_by_periodCreateInput;

    @Field(() => game_records_by_periodUpdateInput, {nullable:false})
    @Type(() => game_records_by_periodUpdateInput)
    update!: game_records_by_periodUpdateInput;
}
