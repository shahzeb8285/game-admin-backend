import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';
import { GameHistoryOrderByWithRelationInput } from './game-history-order-by-with-relation.input';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameHistoryScalarFieldEnum } from './game-history-scalar-field.enum';

@ArgsType()
export class FindManyGameHistoryArgs {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;

    @Field(() => [GameHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameHistoryOrderByWithRelationInput>;

    @Field(() => GameHistoryWhereUniqueInput, {nullable:true})
    cursor?: GameHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameHistoryScalarFieldEnum>;
}
