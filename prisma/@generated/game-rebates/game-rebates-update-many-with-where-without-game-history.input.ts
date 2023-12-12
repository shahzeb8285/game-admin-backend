import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesScalarWhereInput } from './game-rebates-scalar-where.input';
import { Type } from 'class-transformer';
import { game_rebatesUpdateManyMutationInput } from './game-rebates-update-many-mutation.input';

@InputType()
export class game_rebatesUpdateManyWithWhereWithoutGame_historyInput {

    @Field(() => game_rebatesScalarWhereInput, {nullable:false})
    @Type(() => game_rebatesScalarWhereInput)
    where!: game_rebatesScalarWhereInput;

    @Field(() => game_rebatesUpdateManyMutationInput, {nullable:false})
    @Type(() => game_rebatesUpdateManyMutationInput)
    data!: game_rebatesUpdateManyMutationInput;
}
