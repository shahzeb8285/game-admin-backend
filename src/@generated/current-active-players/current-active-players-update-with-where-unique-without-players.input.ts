import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersUpdateWithoutPlayersInput } from './current-active-players-update-without-players.input';

@InputType()
export class CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>;

    @Field(() => CurrentActivePlayersUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateWithoutPlayersInput)
    data!: CurrentActivePlayersUpdateWithoutPlayersInput;
}
