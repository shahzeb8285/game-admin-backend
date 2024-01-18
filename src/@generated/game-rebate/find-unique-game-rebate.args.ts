import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGameRebateArgs {

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: Prisma.AtLeast<GameRebateWhereUniqueInput, 'game_rebates_id'>;
}
