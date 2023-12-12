import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersWhereInput } from '../current-active-players/current-active-players-where.input';

@InputType()
export class Current_active_playersListRelationFilter {

    @Field(() => current_active_playersWhereInput, {nullable:true})
    every?: current_active_playersWhereInput;

    @Field(() => current_active_playersWhereInput, {nullable:true})
    some?: current_active_playersWhereInput;

    @Field(() => current_active_playersWhereInput, {nullable:true})
    none?: current_active_playersWhereInput;
}
