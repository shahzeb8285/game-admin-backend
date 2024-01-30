import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodUpdateManyMutationInput } from '../game-records-by-period/game-records-by-period-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_records_by_periodWhereInput } from '../game-records-by-period/game-records-by-period-where.input';

@ArgsType()
export class UpdateManygameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodUpdateManyMutationInput, {nullable:false})
    @Type(() => game_records_by_periodUpdateManyMutationInput)
    data!: game_records_by_periodUpdateManyMutationInput;

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    @Type(() => game_records_by_periodWhereInput)
    where?: game_records_by_periodWhereInput;
}
