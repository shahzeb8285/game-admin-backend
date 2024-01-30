import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodCreateInput } from '../game-records-by-period/game-records-by-period-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodCreateInput, {nullable:false})
    @Type(() => game_records_by_periodCreateInput)
    data!: game_records_by_periodCreateInput;
}
