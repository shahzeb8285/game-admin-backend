import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesScalarWhereInput } from './sg-games-scalar-where.input';
import { Type } from 'class-transformer';
import { sg_gamesUpdateManyMutationInput } from './sg-games-update-many-mutation.input';

@InputType()
export class sg_gamesUpdateManyWithWhereWithoutGame_record_roundsInput {

    @Field(() => sg_gamesScalarWhereInput, {nullable:false})
    @Type(() => sg_gamesScalarWhereInput)
    where!: sg_gamesScalarWhereInput;

    @Field(() => sg_gamesUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_gamesUpdateManyMutationInput)
    data!: sg_gamesUpdateManyMutationInput;
}
