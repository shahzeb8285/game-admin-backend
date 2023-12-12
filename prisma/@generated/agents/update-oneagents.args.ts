import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsUpdateInput } from './agents-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@ArgsType()
export class UpdateOneagentsArgs {

    @Field(() => agentsUpdateInput, {nullable:false})
    @Type(() => agentsUpdateInput)
    data!: agentsUpdateInput;

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
