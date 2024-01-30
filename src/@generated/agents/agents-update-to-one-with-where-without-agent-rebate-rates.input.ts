import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutAgent_rebate_ratesInput } from './agents-update-without-agent-rebate-rates.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutAgent_rebate_ratesInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutAgent_rebate_ratesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_rebate_ratesInput)
    data!: agentsUpdateWithoutAgent_rebate_ratesInput;
}
