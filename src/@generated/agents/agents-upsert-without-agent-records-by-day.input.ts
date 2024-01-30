import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutAgent_records_by_dayInput } from './agents-update-without-agent-records-by-day.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_records_by_dayInput } from './agents-create-without-agent-records-by-day.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutAgent_records_by_dayInput {

    @Field(() => agentsUpdateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_records_by_dayInput)
    update!: agentsUpdateWithoutAgent_records_by_dayInput;

    @Field(() => agentsCreateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_records_by_dayInput)
    create!: agentsCreateWithoutAgent_records_by_dayInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
