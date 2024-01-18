import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutChildrenInput } from './agents-update-without-children.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => agentsUpdateWithoutChildrenInput)
    data!: agentsUpdateWithoutChildrenInput;
}
