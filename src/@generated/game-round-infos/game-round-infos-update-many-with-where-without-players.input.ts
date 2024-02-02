import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosScalarWhereInput } from './game-round-infos-scalar-where.input';
import { Type } from 'class-transformer';
import { game_round_infosUpdateManyMutationInput } from './game-round-infos-update-many-mutation.input';

@InputType()
export class game_round_infosUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => game_round_infosScalarWhereInput, {nullable:false})
    @Type(() => game_round_infosScalarWhereInput)
    where!: game_round_infosScalarWhereInput;

    @Field(() => game_round_infosUpdateManyMutationInput, {nullable:false})
    @Type(() => game_round_infosUpdateManyMutationInput)
    data!: game_round_infosUpdateManyMutationInput;
}
