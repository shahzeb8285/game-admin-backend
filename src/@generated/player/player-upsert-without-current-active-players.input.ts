import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutCurrent_active_playersInput } from './player-update-without-current-active-players.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutCurrent_active_playersInput } from './player-create-without-current-active-players.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutCurrent_active_playersInput {

    @Field(() => PlayerUpdateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutCurrent_active_playersInput)
    update!: PlayerUpdateWithoutCurrent_active_playersInput;

    @Field(() => PlayerCreateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => PlayerCreateWithoutCurrent_active_playersInput)
    create!: PlayerCreateWithoutCurrent_active_playersInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
