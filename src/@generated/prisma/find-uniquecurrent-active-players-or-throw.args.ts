import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersWhereUniqueInput } from '../current-active-players/current-active-players-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecurrentActivePlayersOrThrowArgs {

    @Field(() => current_active_playersWhereUniqueInput, {nullable:false})
    @Type(() => current_active_playersWhereUniqueInput)
    where!: current_active_playersWhereUniqueInput;
}
