import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodWhereUniqueInput } from '../game-records-by-period/game-records-by-period-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquegameRecordsByPeriodOrThrowArgs {

    @Field(() => game_records_by_periodWhereUniqueInput, {nullable:false})
    @Type(() => game_records_by_periodWhereUniqueInput)
    where!: game_records_by_periodWhereUniqueInput;
}
