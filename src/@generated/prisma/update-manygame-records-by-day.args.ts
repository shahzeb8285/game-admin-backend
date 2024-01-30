import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayUpdateManyMutationInput } from '../game-records-by-day/game-records-by-day-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_records_by_dayWhereInput } from '../game-records-by-day/game-records-by-day-where.input';

@ArgsType()
export class UpdateManygameRecordsByDayArgs {

    @Field(() => game_records_by_dayUpdateManyMutationInput, {nullable:false})
    @Type(() => game_records_by_dayUpdateManyMutationInput)
    data!: game_records_by_dayUpdateManyMutationInput;

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    @Type(() => game_records_by_dayWhereInput)
    where?: game_records_by_dayWhereInput;
}
