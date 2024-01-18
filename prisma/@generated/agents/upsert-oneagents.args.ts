import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateInput } from './agents-create.input';
import { agentsUpdateInput } from './agents-update.input';

@ArgsType()
export class UpsertOneagentsArgs {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsCreateInput, {nullable:false})
    @Type(() => agentsCreateInput)
    create!: agentsCreateInput;

    @Field(() => agentsUpdateInput, {nullable:false})
    @Type(() => agentsUpdateInput)
    update!: agentsUpdateInput;
}
