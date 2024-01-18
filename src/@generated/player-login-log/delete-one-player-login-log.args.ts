import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePlayerLoginLogArgs {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;
}
