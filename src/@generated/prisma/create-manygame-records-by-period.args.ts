import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodCreateManyInput } from '../game-records-by-period/game-records-by-period-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameRecordsByPeriodArgs {

    @Field(() => [game_records_by_periodCreateManyInput], {nullable:false})
    @Type(() => game_records_by_periodCreateManyInput)
    data!: Array<game_records_by_periodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
