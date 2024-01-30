import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutAgent_rebate_ratesInput } from './agents-update-without-agent-rebate-rates.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_rebate_ratesInput } from './agents-create-without-agent-rebate-rates.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutAgent_rebate_ratesInput {

    @Field(() => agentsUpdateWithoutAgent_rebate_ratesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_rebate_ratesInput)
    update!: agentsUpdateWithoutAgent_rebate_ratesInput;

    @Field(() => agentsCreateWithoutAgent_rebate_ratesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_rebate_ratesInput)
    create!: agentsCreateWithoutAgent_rebate_ratesInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
