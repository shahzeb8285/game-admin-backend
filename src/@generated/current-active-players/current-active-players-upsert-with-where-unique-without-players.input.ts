import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersUpdateWithoutPlayersInput } from './current-active-players-update-without-players.input';
import { CurrentActivePlayersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';

@InputType()
export class CurrentActivePlayersUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>;

    @Field(() => CurrentActivePlayersUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateWithoutPlayersInput)
    update!: CurrentActivePlayersUpdateWithoutPlayersInput;

    @Field(() => CurrentActivePlayersCreateWithoutPlayersInput, {nullable:false})
    @Type(() => CurrentActivePlayersCreateWithoutPlayersInput)
    create!: CurrentActivePlayersCreateWithoutPlayersInput;
}