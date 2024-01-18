import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryScalarWhereInput } from './game-history-scalar-where.input';
import { Type } from 'class-transformer';
import { GameHistoryUpdateManyMutationInput } from './game-history-update-many-mutation.input';

@InputType()
export class GameHistoryUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => GameHistoryScalarWhereInput, {nullable:false})
    @Type(() => GameHistoryScalarWhereInput)
    where!: GameHistoryScalarWhereInput;

    @Field(() => GameHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GameHistoryUpdateManyMutationInput)
    data!: GameHistoryUpdateManyMutationInput;
}
