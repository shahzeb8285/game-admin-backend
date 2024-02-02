import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutAgent_records_by_dayInput } from './players-update-without-agent-records-by-day.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutAgent_records_by_dayInput } from './players-create-without-agent-records-by-day.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutAgent_records_by_dayInput {

    @Field(() => playersUpdateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => playersUpdateWithoutAgent_records_by_dayInput)
    update!: playersUpdateWithoutAgent_records_by_dayInput;

    @Field(() => playersCreateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => playersCreateWithoutAgent_records_by_dayInput)
    create!: playersCreateWithoutAgent_records_by_dayInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
