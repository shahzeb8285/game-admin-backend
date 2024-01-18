import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutPlayer_walletsInput } from './player-create-without-player-wallets.input';

@InputType()
export class PlayerCreateOrConnectWithoutPlayer_walletsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutPlayer_walletsInput)
    create!: PlayerCreateWithoutPlayer_walletsInput;
}
