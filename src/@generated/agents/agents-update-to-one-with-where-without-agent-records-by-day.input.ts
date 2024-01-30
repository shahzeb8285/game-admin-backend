import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutAgent_records_by_dayInput } from './agents-update-without-agent-records-by-day.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutAgent_records_by_dayInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_records_by_dayInput)
    data!: agentsUpdateWithoutAgent_records_by_dayInput;
}
