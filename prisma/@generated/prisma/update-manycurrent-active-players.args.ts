import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersUpdateManyMutationInput } from '../current-active-players/current-active-players-update-many-mutation.input';
import { Type } from 'class-transformer';
import { current_active_playersWhereInput } from '../current-active-players/current-active-players-where.input';

@ArgsType()
export class UpdateManycurrentActivePlayersArgs {

    @Field(() => current_active_playersUpdateManyMutationInput, {nullable:false})
    @Type(() => current_active_playersUpdateManyMutationInput)
    data!: current_active_playersUpdateManyMutationInput;

    @Field(() => current_active_playersWhereInput, {nullable:true})
    @Type(() => current_active_playersWhereInput)
    where?: current_active_playersWhereInput;
}
