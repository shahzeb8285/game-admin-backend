import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutChildrenInput } from './agents-create-without-children.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutChildrenInput } from './agents-create-or-connect-without-children.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsCreateNestedOneWithoutChildrenInput {

    @Field(() => agentsCreateWithoutChildrenInput, {nullable:true})
    @Type(() => agentsCreateWithoutChildrenInput)
    create?: agentsCreateWithoutChildrenInput;

    @Field(() => agentsCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: agentsCreateOrConnectWithoutChildrenInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;
}
