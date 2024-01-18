import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateInput } from './player-create.input';
import { PlayerUpdateInput } from './player-update.input';

@ArgsType()
export class UpsertOnePlayerArgs {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateInput, {nullable:false})
    @Type(() => PlayerCreateInput)
    create!: PlayerCreateInput;

    @Field(() => PlayerUpdateInput, {nullable:false})
    @Type(() => PlayerUpdateInput)
    update!: PlayerUpdateInput;
}
