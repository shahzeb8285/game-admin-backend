import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogUpdateInput } from './player-login-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';

@ArgsType()
export class UpdateOnePlayerLoginLogArgs {

    @Field(() => PlayerLoginLogUpdateInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateInput)
    data!: PlayerLoginLogUpdateInput;

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;
}
