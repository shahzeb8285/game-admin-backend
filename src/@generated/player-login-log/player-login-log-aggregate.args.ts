import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogOrderByWithRelationInput } from './player-login-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerLoginLogCountAggregateInput } from './player-login-log-count-aggregate.input';
import { PlayerLoginLogMinAggregateInput } from './player-login-log-min-aggregate.input';
import { PlayerLoginLogMaxAggregateInput } from './player-login-log-max-aggregate.input';

@ArgsType()
export class PlayerLoginLogAggregateArgs {

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    @Type(() => PlayerLoginLogWhereInput)
    where?: PlayerLoginLogWhereInput;

    @Field(() => [PlayerLoginLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerLoginLogOrderByWithRelationInput>;

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlayerLoginLogCountAggregateInput, {nullable:true})
    _count?: PlayerLoginLogCountAggregateInput;

    @Field(() => PlayerLoginLogMinAggregateInput, {nullable:true})
    _min?: PlayerLoginLogMinAggregateInput;

    @Field(() => PlayerLoginLogMaxAggregateInput, {nullable:true})
    _max?: PlayerLoginLogMaxAggregateInput;
}
