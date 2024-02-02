import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayScalarWhereInput } from './game-records-by-day-scalar-where.input';
import { Type } from 'class-transformer';
import { game_records_by_dayUpdateManyMutationInput } from './game-records-by-day-update-many-mutation.input';

@InputType()
export class game_records_by_dayUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => game_records_by_dayScalarWhereInput, {nullable:false})
    @Type(() => game_records_by_dayScalarWhereInput)
    where!: game_records_by_dayScalarWhereInput;

    @Field(() => game_records_by_dayUpdateManyMutationInput, {nullable:false})
    @Type(() => game_records_by_dayUpdateManyMutationInput)
    data!: game_records_by_dayUpdateManyMutationInput;
}
