import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesScalarWhereInput } from './player-rebate-rates-scalar-where.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesUpdateManyMutationInput } from './player-rebate-rates-update-many-mutation.input';

@InputType()
export class player_rebate_ratesUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => player_rebate_ratesScalarWhereInput, {nullable:false})
    @Type(() => player_rebate_ratesScalarWhereInput)
    where!: player_rebate_ratesScalarWhereInput;

    @Field(() => player_rebate_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => player_rebate_ratesUpdateManyMutationInput)
    data!: player_rebate_ratesUpdateManyMutationInput;
}
