import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_rebate_ratesInput } from './agents-create-without-agent-rebate-rates.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_rebate_ratesInput } from './agents-create-or-connect-without-agent-rebate-rates.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsCreateNestedOneWithoutAgent_rebate_ratesInput {

    @Field(() => agentsCreateWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_rebate_ratesInput)
    create?: agentsCreateWithoutAgent_rebate_ratesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_rebate_ratesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_rebate_ratesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_rebate_ratesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;
}
