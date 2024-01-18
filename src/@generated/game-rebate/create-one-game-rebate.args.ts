import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateCreateInput } from './game-rebate-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGameRebateArgs {

    @Field(() => GameRebateCreateInput, {nullable:false})
    @Type(() => GameRebateCreateInput)
    data!: GameRebateCreateInput;
}
