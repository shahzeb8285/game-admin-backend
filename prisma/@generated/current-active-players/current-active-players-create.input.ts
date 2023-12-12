import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutCurrent_active_playersInput } from '../players/players-create-nested-one-without-current-active-players.input';

@InputType()
export class current_active_playersCreateInput {

    @Field(() => Date, {nullable:false})
    last_active_time!: Date | string;

    @Field(() => playersCreateNestedOneWithoutCurrent_active_playersInput, {nullable:false})
    players!: playersCreateNestedOneWithoutCurrent_active_playersInput;
}
