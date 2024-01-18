import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutCurrent_active_playersInput } from './player-create-without-current-active-players.input';

@InputType()
export class PlayerCreateOrConnectWithoutCurrent_active_playersInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => PlayerCreateWithoutCurrent_active_playersInput)
    create!: PlayerCreateWithoutCurrent_active_playersInput;
}
