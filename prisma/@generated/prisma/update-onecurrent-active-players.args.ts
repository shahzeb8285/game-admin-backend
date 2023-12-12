import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersUpdateInput } from '../current-active-players/current-active-players-update.input';
import { Type } from 'class-transformer';
import { current_active_playersWhereUniqueInput } from '../current-active-players/current-active-players-where-unique.input';

@ArgsType()
export class UpdateOnecurrentActivePlayersArgs {

    @Field(() => current_active_playersUpdateInput, {nullable:false})
    @Type(() => current_active_playersUpdateInput)
    data!: current_active_playersUpdateInput;

    @Field(() => current_active_playersWhereUniqueInput, {nullable:false})
    @Type(() => current_active_playersWhereUniqueInput)
    where!: current_active_playersWhereUniqueInput;
}
