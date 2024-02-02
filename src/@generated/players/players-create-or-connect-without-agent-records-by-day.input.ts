import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutAgent_records_by_dayInput } from './players-create-without-agent-records-by-day.input';

@InputType()
export class playersCreateOrConnectWithoutAgent_records_by_dayInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => playersCreateWithoutAgent_records_by_dayInput)
    create!: playersCreateWithoutAgent_records_by_dayInput;
}
