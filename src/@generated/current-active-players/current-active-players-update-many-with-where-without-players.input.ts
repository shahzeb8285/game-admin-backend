import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersScalarWhereInput } from './current-active-players-scalar-where.input';
import { Type } from 'class-transformer';
import { current_active_playersUpdateManyMutationInput } from './current-active-players-update-many-mutation.input';

@InputType()
export class current_active_playersUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => current_active_playersScalarWhereInput, {nullable:false})
    @Type(() => current_active_playersScalarWhereInput)
    where!: current_active_playersScalarWhereInput;

    @Field(() => current_active_playersUpdateManyMutationInput, {nullable:false})
    @Type(() => current_active_playersUpdateManyMutationInput)
    data!: current_active_playersUpdateManyMutationInput;
}
