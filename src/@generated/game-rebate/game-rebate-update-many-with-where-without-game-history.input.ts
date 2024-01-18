import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateScalarWhereInput } from './game-rebate-scalar-where.input';
import { Type } from 'class-transformer';
import { GameRebateUpdateManyMutationInput } from './game-rebate-update-many-mutation.input';

@InputType()
export class GameRebateUpdateManyWithWhereWithoutGame_historyInput {

    @Field(() => GameRebateScalarWhereInput, {nullable:false})
    @Type(() => GameRebateScalarWhereInput)
    where!: GameRebateScalarWhereInput;

    @Field(() => GameRebateUpdateManyMutationInput, {nullable:false})
    @Type(() => GameRebateUpdateManyMutationInput)
    data!: GameRebateUpdateManyMutationInput;
}
