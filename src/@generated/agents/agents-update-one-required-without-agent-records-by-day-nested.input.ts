import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_records_by_dayInput } from './agents-create-without-agent-records-by-day.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_records_by_dayInput } from './agents-create-or-connect-without-agent-records-by-day.input';
import { agentsUpsertWithoutAgent_records_by_dayInput } from './agents-upsert-without-agent-records-by-day.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutAgent_records_by_dayInput } from './agents-update-to-one-with-where-without-agent-records-by-day.input';

@InputType()
export class agentsUpdateOneRequiredWithoutAgent_records_by_dayNestedInput {

    @Field(() => agentsCreateWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_records_by_dayInput)
    create?: agentsCreateWithoutAgent_records_by_dayInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_records_by_dayInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_records_by_dayInput;

    @Field(() => agentsUpsertWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => agentsUpsertWithoutAgent_records_by_dayInput)
    upsert?: agentsUpsertWithoutAgent_records_by_dayInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;

    @Field(() => agentsUpdateToOneWithWhereWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutAgent_records_by_dayInput)
    update?: agentsUpdateToOneWithWhereWithoutAgent_records_by_dayInput;
}
