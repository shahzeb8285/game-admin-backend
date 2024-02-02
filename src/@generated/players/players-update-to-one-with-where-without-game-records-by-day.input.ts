import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutGame_records_by_dayInput } from './players-update-without-game-records-by-day.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutGame_records_by_dayInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutGame_records_by_dayInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_records_by_dayInput)
    data!: playersUpdateWithoutGame_records_by_dayInput;
}
