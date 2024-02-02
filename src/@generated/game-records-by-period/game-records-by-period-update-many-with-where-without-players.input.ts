import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodScalarWhereInput } from './game-records-by-period-scalar-where.input';
import { Type } from 'class-transformer';
import { game_records_by_periodUpdateManyMutationInput } from './game-records-by-period-update-many-mutation.input';

@InputType()
export class game_records_by_periodUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => game_records_by_periodScalarWhereInput, {nullable:false})
    @Type(() => game_records_by_periodScalarWhereInput)
    where!: game_records_by_periodScalarWhereInput;

    @Field(() => game_records_by_periodUpdateManyMutationInput, {nullable:false})
    @Type(() => game_records_by_periodUpdateManyMutationInput)
    data!: game_records_by_periodUpdateManyMutationInput;
}
