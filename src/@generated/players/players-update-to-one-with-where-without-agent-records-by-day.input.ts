import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutAgent_records_by_dayInput } from './players-update-without-agent-records-by-day.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutAgent_records_by_dayInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => playersUpdateWithoutAgent_records_by_dayInput)
    data!: playersUpdateWithoutAgent_records_by_dayInput;
}
