import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>;
}