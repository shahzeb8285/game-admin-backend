import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersOrderByWithRelationInput } from './current-active-players-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrentActivePlayersCountAggregateInput } from './current-active-players-count-aggregate.input';
import { CurrentActivePlayersMinAggregateInput } from './current-active-players-min-aggregate.input';
import { CurrentActivePlayersMaxAggregateInput } from './current-active-players-max-aggregate.input';

@ArgsType()
export class CurrentActivePlayersAggregateArgs {

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    @Type(() => CurrentActivePlayersWhereInput)
    where?: CurrentActivePlayersWhereInput;

    @Field(() => [CurrentActivePlayersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CurrentActivePlayersOrderByWithRelationInput>;

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CurrentActivePlayersWhereUniqueInput, 'player_id_r'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CurrentActivePlayersCountAggregateInput, {nullable:true})
    _count?: CurrentActivePlayersCountAggregateInput;

    @Field(() => CurrentActivePlayersMinAggregateInput, {nullable:true})
    _min?: CurrentActivePlayersMinAggregateInput;

    @Field(() => CurrentActivePlayersMaxAggregateInput, {nullable:true})
    _max?: CurrentActivePlayersMaxAggregateInput;
}
