import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_dayCreateManyInput } from '../game-records-by-day/game-records-by-day-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameRecordsByDayArgs {

    @Field(() => [game_records_by_dayCreateManyInput], {nullable:false})
    @Type(() => game_records_by_dayCreateManyInput)
    data!: Array<game_records_by_dayCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
