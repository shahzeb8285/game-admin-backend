import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutAgentInput } from './player-update-without-agent.input';
import { PlayerCreateWithoutAgentInput } from './player-create-without-agent.input';

@InputType()
export class PlayerUpsertWithWhereUniqueWithoutAgentInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerUpdateWithoutAgentInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutAgentInput)
    update!: PlayerUpdateWithoutAgentInput;

    @Field(() => PlayerCreateWithoutAgentInput, {nullable:false})
    @Type(() => PlayerCreateWithoutAgentInput)
    create!: PlayerCreateWithoutAgentInput;
}
