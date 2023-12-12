import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutChildrenInput } from './agents-update-without-children.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutChildrenInput } from './agents-create-without-children.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutChildrenInput {

    @Field(() => agentsUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => agentsUpdateWithoutChildrenInput)
    update!: agentsUpdateWithoutChildrenInput;

    @Field(() => agentsCreateWithoutChildrenInput, {nullable:false})
    @Type(() => agentsCreateWithoutChildrenInput)
    create!: agentsCreateWithoutChildrenInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
