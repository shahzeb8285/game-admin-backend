import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersScalarWhereInput } from './current-active-players-scalar-where.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersUpdateManyMutationInput } from './current-active-players-update-many-mutation.input';

@InputType()
export class CurrentActivePlayersUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => CurrentActivePlayersScalarWhereInput, {nullable:false})
    @Type(() => CurrentActivePlayersScalarWhereInput)
    where!: CurrentActivePlayersScalarWhereInput;

    @Field(() => CurrentActivePlayersUpdateManyMutationInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateManyMutationInput)
    data!: CurrentActivePlayersUpdateManyMutationInput;
}
