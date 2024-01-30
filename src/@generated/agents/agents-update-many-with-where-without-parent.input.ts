import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsScalarWhereInput } from './agents-scalar-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateManyMutationInput } from './agents-update-many-mutation.input';

@InputType()
export class agentsUpdateManyWithWhereWithoutParentInput {

    @Field(() => agentsScalarWhereInput, {nullable:false})
    @Type(() => agentsScalarWhereInput)
    where!: agentsScalarWhereInput;

    @Field(() => agentsUpdateManyMutationInput, {nullable:false})
    @Type(() => agentsUpdateManyMutationInput)
    data!: agentsUpdateManyMutationInput;
}
