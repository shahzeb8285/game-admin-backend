import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersUpdateInput } from './current-active-players-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';

@ArgsType()
export class UpdateOneCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersUpdateInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateInput)
    data!: CurrentActivePlayersUpdateInput;

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>;
}
