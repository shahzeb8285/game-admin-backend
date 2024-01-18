import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutParentInput } from './agents-create-without-parent.input';

@InputType()
export class agentsCreateOrConnectWithoutParentInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsCreateWithoutParentInput, {nullable:false})
    @Type(() => agentsCreateWithoutParentInput)
    create!: agentsCreateWithoutParentInput;
}
