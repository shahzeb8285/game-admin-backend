import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';
import { Type } from 'class-transformer';
import { GameRebateOrderByWithRelationInput } from './game-rebate-order-by-with-relation.input';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameRebateScalarFieldEnum } from './game-rebate-scalar-field.enum';

@ArgsType()
export class FindManyGameRebateArgs {

    @Field(() => GameRebateWhereInput, {nullable:true})
    @Type(() => GameRebateWhereInput)
    where?: GameRebateWhereInput;

    @Field(() => [GameRebateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameRebateOrderByWithRelationInput>;

    @Field(() => GameRebateWhereUniqueInput, {nullable:true})
    cursor?: GameRebateWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameRebateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameRebateScalarFieldEnum>;
}
