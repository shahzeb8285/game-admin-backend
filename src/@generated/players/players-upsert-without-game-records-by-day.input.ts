import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutGame_records_by_dayInput } from './players-update-without-game-records-by-day.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_records_by_dayInput } from './players-create-without-game-records-by-day.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutGame_records_by_dayInput {

    @Field(() => playersUpdateWithoutGame_records_by_dayInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_records_by_dayInput)
    update!: playersUpdateWithoutGame_records_by_dayInput;

    @Field(() => playersCreateWithoutGame_records_by_dayInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_records_by_dayInput)
    create!: playersCreateWithoutGame_records_by_dayInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
