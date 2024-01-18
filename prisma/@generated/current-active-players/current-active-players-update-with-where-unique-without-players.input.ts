import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { current_active_playersUpdateWithoutPlayersInput } from './current-active-players-update-without-players.input';

@InputType()
export class current_active_playersUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => current_active_playersWhereUniqueInput, {nullable:false})
    @Type(() => current_active_playersWhereUniqueInput)
    where!: current_active_playersWhereUniqueInput;

    @Field(() => current_active_playersUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => current_active_playersUpdateWithoutPlayersInput)
    data!: current_active_playersUpdateWithoutPlayersInput;
}
