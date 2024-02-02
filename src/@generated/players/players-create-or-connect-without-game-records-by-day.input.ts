import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_records_by_dayInput } from './players-create-without-game-records-by-day.input';

@InputType()
export class playersCreateOrConnectWithoutGame_records_by_dayInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutGame_records_by_dayInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_records_by_dayInput)
    create!: playersCreateWithoutGame_records_by_dayInput;
}
