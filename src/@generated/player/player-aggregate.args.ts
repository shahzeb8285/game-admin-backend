import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerOrderByWithRelationInput } from './player-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerCountAggregateInput } from './player-count-aggregate.input';
import { PlayerMinAggregateInput } from './player-min-aggregate.input';
import { PlayerMaxAggregateInput } from './player-max-aggregate.input';

@ArgsType()
export class PlayerAggregateArgs {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => [PlayerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerOrderByWithRelationInput>;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlayerCountAggregateInput, {nullable:true})
    _count?: PlayerCountAggregateInput;

    @Field(() => PlayerMinAggregateInput, {nullable:true})
    _min?: PlayerMinAggregateInput;

    @Field(() => PlayerMaxAggregateInput, {nullable:true})
    _max?: PlayerMaxAggregateInput;
}
