import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutCurrent_active_playersInput } from './players-create-without-current-active-players.input';

@InputType()
export class playersCreateOrConnectWithoutCurrent_active_playersInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersCreateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => playersCreateWithoutCurrent_active_playersInput)
    create!: playersCreateWithoutCurrent_active_playersInput;
}
