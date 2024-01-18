import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerScalarWhereInput } from './player-scalar-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateManyMutationInput } from './player-update-many-mutation.input';

@InputType()
export class PlayerUpdateManyWithWhereWithoutAgentInput {

    @Field(() => PlayerScalarWhereInput, {nullable:false})
    @Type(() => PlayerScalarWhereInput)
    where!: PlayerScalarWhereInput;

    @Field(() => PlayerUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerUpdateManyMutationInput)
    data!: PlayerUpdateManyMutationInput;
}
