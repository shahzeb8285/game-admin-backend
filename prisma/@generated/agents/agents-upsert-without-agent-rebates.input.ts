import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutAgent_rebatesInput } from './agents-update-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_rebatesInput } from './agents-create-without-agent-rebates.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutAgent_rebatesInput {

    @Field(() => agentsUpdateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_rebatesInput)
    update!: agentsUpdateWithoutAgent_rebatesInput;

    @Field(() => agentsCreateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_rebatesInput)
    create!: agentsCreateWithoutAgent_rebatesInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
