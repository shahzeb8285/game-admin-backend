import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateUpdateInput } from './game-rebate-update.input';
import { Type } from 'class-transformer';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';

@ArgsType()
export class UpdateOneGameRebateArgs {

    @Field(() => GameRebateUpdateInput, {nullable:false})
    @Type(() => GameRebateUpdateInput)
    data!: GameRebateUpdateInput;

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: GameRebateWhereUniqueInput;
}
