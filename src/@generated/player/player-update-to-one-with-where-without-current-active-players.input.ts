import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutCurrent_active_playersInput } from './player-update-without-current-active-players.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutCurrent_active_playersInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutCurrent_active_playersInput)
    data!: PlayerUpdateWithoutCurrent_active_playersInput;
}
