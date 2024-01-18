import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyScalarWhereInput } from './game-history-scalar-where.input';
import { Type } from 'class-transformer';
import { game_historyUpdateManyMutationInput } from './game-history-update-many-mutation.input';

@InputType()
export class game_historyUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => game_historyScalarWhereInput, {nullable:false})
    @Type(() => game_historyScalarWhereInput)
    where!: game_historyScalarWhereInput;

    @Field(() => game_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => game_historyUpdateManyMutationInput)
    data!: game_historyUpdateManyMutationInput;
}
