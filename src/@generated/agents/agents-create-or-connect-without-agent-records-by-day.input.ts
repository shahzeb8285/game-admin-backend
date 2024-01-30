import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_records_by_dayInput } from './agents-create-without-agent-records-by-day.input';

@InputType()
export class agentsCreateOrConnectWithoutAgent_records_by_dayInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsCreateWithoutAgent_records_by_dayInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_records_by_dayInput)
    create!: agentsCreateWithoutAgent_records_by_dayInput;
}
