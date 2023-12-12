import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersWhereInput } from '../current-active-players/current-active-players-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycurrentActivePlayersArgs {

    @Field(() => current_active_playersWhereInput, {nullable:true})
    @Type(() => current_active_playersWhereInput)
    where?: current_active_playersWhereInput;
}
