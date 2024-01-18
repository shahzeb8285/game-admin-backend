import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogCreateInput } from './player-login-log-create.input';
import { PlayerLoginLogUpdateInput } from './player-login-log-update.input';

@ArgsType()
export class UpsertOnePlayerLoginLogArgs {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;

    @Field(() => PlayerLoginLogCreateInput, {nullable:false})
    @Type(() => PlayerLoginLogCreateInput)
    create!: PlayerLoginLogCreateInput;

    @Field(() => PlayerLoginLogUpdateInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateInput)
    update!: PlayerLoginLogUpdateInput;
}