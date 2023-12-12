import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutAgent_rebatesInput } from './agents-update-without-agent-rebates.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutAgent_rebatesInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_rebatesInput)
    data!: agentsUpdateWithoutAgent_rebatesInput;
}
