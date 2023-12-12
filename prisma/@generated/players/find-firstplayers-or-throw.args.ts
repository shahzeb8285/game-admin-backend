import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersOrderByWithRelationInput } from './players-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayersScalarFieldEnum } from '../prisma/players-scalar-field.enum';

@ArgsType()
export class FindFirstplayersOrThrowArgs {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => [playersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<playersOrderByWithRelationInput>;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlayersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlayersScalarFieldEnum>;
}
