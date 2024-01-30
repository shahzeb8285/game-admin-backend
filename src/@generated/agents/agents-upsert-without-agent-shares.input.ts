import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutAgent_sharesInput } from './agents-update-without-agent-shares.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_sharesInput } from './agents-create-without-agent-shares.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutAgent_sharesInput {

    @Field(() => agentsUpdateWithoutAgent_sharesInput, {nullable:false})
    @Type(() => agentsUpdateWithoutAgent_sharesInput)
    update!: agentsUpdateWithoutAgent_sharesInput;

    @Field(() => agentsCreateWithoutAgent_sharesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_sharesInput)
    create!: agentsCreateWithoutAgent_sharesInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
