import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersScalarWhereInput } from './players-scalar-where.input';
import { Type } from 'class-transformer';
import { playersUpdateManyMutationInput } from './players-update-many-mutation.input';

@InputType()
export class playersUpdateManyWithWhereWithoutAgentInput {

    @Field(() => playersScalarWhereInput, {nullable:false})
    @Type(() => playersScalarWhereInput)
    where!: playersScalarWhereInput;

    @Field(() => playersUpdateManyMutationInput, {nullable:false})
    @Type(() => playersUpdateManyMutationInput)
    data!: playersUpdateManyMutationInput;
}
