import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutGame_historyInput } from './player-create-without-game-history.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutGame_historyInput } from './player-create-or-connect-without-game-history.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutGame_historyInput {

    @Field(() => PlayerCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerCreateWithoutGame_historyInput)
    create?: PlayerCreateWithoutGame_historyInput;

    @Field(() => PlayerCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutGame_historyInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
