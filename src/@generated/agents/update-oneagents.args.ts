import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsUpdateInput } from './agents-update.input';
import { Type } from 'class-transformer';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@ArgsType()
export class UpdateOneagentsArgs {

    @Field(() => agentsUpdateInput, {nullable:false})
    @Type(() => agentsUpdateInput)
    data!: agentsUpdateInput;

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;
}
