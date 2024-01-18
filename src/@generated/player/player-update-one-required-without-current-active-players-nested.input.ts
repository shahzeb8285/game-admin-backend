import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutCurrent_active_playersInput } from './player-create-without-current-active-players.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutCurrent_active_playersInput } from './player-create-or-connect-without-current-active-players.input';
import { PlayerUpsertWithoutCurrent_active_playersInput } from './player-upsert-without-current-active-players.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutCurrent_active_playersInput } from './player-update-to-one-with-where-without-current-active-players.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutCurrent_active_playersNestedInput {

    @Field(() => PlayerCreateWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerCreateWithoutCurrent_active_playersInput)
    create?: PlayerCreateWithoutCurrent_active_playersInput;

    @Field(() => PlayerCreateOrConnectWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutCurrent_active_playersInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutCurrent_active_playersInput;

    @Field(() => PlayerUpsertWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutCurrent_active_playersInput)
    upsert?: PlayerUpsertWithoutCurrent_active_playersInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerUpdateToOneWithWhereWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutCurrent_active_playersInput)
    update?: PlayerUpdateToOneWithWhereWithoutCurrent_active_playersInput;
}
