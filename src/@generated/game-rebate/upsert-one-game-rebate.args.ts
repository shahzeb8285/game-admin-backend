import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { GameRebateCreateInput } from './game-rebate-create.input';
import { GameRebateUpdateInput } from './game-rebate-update.input';

@ArgsType()
export class UpsertOneGameRebateArgs {

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: Prisma.AtLeast<GameRebateWhereUniqueInput, 'game_rebates_id'>;

    @Field(() => GameRebateCreateInput, {nullable:false})
    @Type(() => GameRebateCreateInput)
    create!: GameRebateCreateInput;

    @Field(() => GameRebateUpdateInput, {nullable:false})
    @Type(() => GameRebateUpdateInput)
    update!: GameRebateUpdateInput;
}
