import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateNestedOneWithoutCurrent_active_playersInput } from '../player/player-create-nested-one-without-current-active-players.input';

@InputType()
export class CurrentActivePlayersCreateInput {

    @Field(() => Date, {nullable:false})
    last_active_time!: Date | string;

    @Field(() => PlayerCreateNestedOneWithoutCurrent_active_playersInput, {nullable:false})
    players!: PlayerCreateNestedOneWithoutCurrent_active_playersInput;
}
