import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutPlayer_walletsInput } from './player-create-without-player-wallets.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutPlayer_walletsInput } from './player-create-or-connect-without-player-wallets.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutPlayer_walletsInput {

    @Field(() => PlayerCreateWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutPlayer_walletsInput)
    create?: PlayerCreateWithoutPlayer_walletsInput;

    @Field(() => PlayerCreateOrConnectWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutPlayer_walletsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayer_walletsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
