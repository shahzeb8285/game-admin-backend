import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateOneRequiredWithoutCurrent_active_playersNestedInput } from '../player/player-update-one-required-without-current-active-players-nested.input';

@InputType()
export class CurrentActivePlayersUpdateInput {

    @Field(() => Date, {nullable:true})
    last_active_time?: Date | string;

    @Field(() => PlayerUpdateOneRequiredWithoutCurrent_active_playersNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutCurrent_active_playersNestedInput;
}
