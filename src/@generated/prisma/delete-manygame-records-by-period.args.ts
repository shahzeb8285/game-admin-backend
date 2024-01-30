import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodWhereInput } from '../game-records-by-period/game-records-by-period-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    @Type(() => game_records_by_periodWhereInput)
    where?: game_records_by_periodWhereInput;
}
