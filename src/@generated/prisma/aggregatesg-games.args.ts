import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';
import { Type } from 'class-transformer';
import { sg_gamesOrderByWithRelationInput } from '../sg-games/sg-games-order-by-with-relation.input';
import { sg_gamesWhereUniqueInput } from '../sg-games/sg-games-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatesgGamesArgs {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;

    @Field(() => [sg_gamesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sg_gamesOrderByWithRelationInput>;

    @Field(() => sg_gamesWhereUniqueInput, {nullable:true})
    cursor?: sg_gamesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
