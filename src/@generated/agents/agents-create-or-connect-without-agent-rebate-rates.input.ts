import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_rebate_ratesInput } from './agents-create-without-agent-rebate-rates.input';

@InputType()
export class agentsCreateOrConnectWithoutAgent_rebate_ratesInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsCreateWithoutAgent_rebate_ratesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_rebate_ratesInput)
    create!: agentsCreateWithoutAgent_rebate_ratesInput;
}
