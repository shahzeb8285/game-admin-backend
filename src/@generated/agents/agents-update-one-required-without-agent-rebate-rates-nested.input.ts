import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_rebate_ratesInput } from './agents-create-without-agent-rebate-rates.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_rebate_ratesInput } from './agents-create-or-connect-without-agent-rebate-rates.input';
import { agentsUpsertWithoutAgent_rebate_ratesInput } from './agents-upsert-without-agent-rebate-rates.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutAgent_rebate_ratesInput } from './agents-update-to-one-with-where-without-agent-rebate-rates.input';

@InputType()
export class agentsUpdateOneRequiredWithoutAgent_rebate_ratesNestedInput {

    @Field(() => agentsCreateWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_rebate_ratesInput)
    create?: agentsCreateWithoutAgent_rebate_ratesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_rebate_ratesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_rebate_ratesInput;

    @Field(() => agentsUpsertWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsUpsertWithoutAgent_rebate_ratesInput)
    upsert?: agentsUpsertWithoutAgent_rebate_ratesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;

    @Field(() => agentsUpdateToOneWithWhereWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutAgent_rebate_ratesInput)
    update?: agentsUpdateToOneWithWhereWithoutAgent_rebate_ratesInput;
}
