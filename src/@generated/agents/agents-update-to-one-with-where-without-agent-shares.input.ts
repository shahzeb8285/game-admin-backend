import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutAgent_sharesInput } from './agents-update-without-agent-shares.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutAgent_sharesInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutAgent_sharesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_sharesInput)
    data!: agentsUpdateWithoutAgent_sharesInput;
}
