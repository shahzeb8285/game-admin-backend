import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutParentInput } from './agents-update-without-parent.input';
import { agentsCreateWithoutParentInput } from './agents-create-without-parent.input';

@InputType()
export class agentsUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsUpdateWithoutParentInput, {nullable:false})
    @Type(() => agentsUpdateWithoutParentInput)
    update!: agentsUpdateWithoutParentInput;

    @Field(() => agentsCreateWithoutParentInput, {nullable:false})
    @Type(() => agentsCreateWithoutParentInput)
    create!: agentsCreateWithoutParentInput;
}
