import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyWhereInput } from '../game-history/game-history-where.input';
import { Type } from 'class-transformer';
import { game_historyOrderByWithRelationInput } from '../game-history/game-history-order-by-with-relation.input';
import { game_historyWhereUniqueInput } from '../game-history/game-history-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregategameHistoryArgs {

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;

    @Field(() => [game_historyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_historyOrderByWithRelationInput>;

    @Field(() => game_historyWhereUniqueInput, {nullable:true})
    cursor?: game_historyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
