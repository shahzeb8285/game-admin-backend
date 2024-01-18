import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutGame_historyInput } from './player-create-without-game-history.input';

@InputType()
export class PlayerCreateOrConnectWithoutGame_historyInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => PlayerCreateWithoutGame_historyInput)
    create!: PlayerCreateWithoutGame_historyInput;
}
