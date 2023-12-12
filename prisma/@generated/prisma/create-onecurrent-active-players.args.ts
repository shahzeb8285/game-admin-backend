import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersCreateInput } from '../current-active-players/current-active-players-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecurrentActivePlayersArgs {

    @Field(() => current_active_playersCreateInput, {nullable:false})
    @Type(() => current_active_playersCreateInput)
    data!: current_active_playersCreateInput;
}
