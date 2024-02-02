import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateManyMutationInput } from './game-record-rounds-update-many-mutation.input';

@InputType()
export class game_record_roundsUpdateManyWithWhereWithoutSg_gameInput {

    @Field(() => game_record_roundsScalarWhereInput, {nullable:false})
    @Type(() => game_record_roundsScalarWhereInput)
    where!: game_record_roundsScalarWhereInput;

    @Field(() => game_record_roundsUpdateManyMutationInput, {nullable:false})
    @Type(() => game_record_roundsUpdateManyMutationInput)
    data!: game_record_roundsUpdateManyMutationInput;
}
