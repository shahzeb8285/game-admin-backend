import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGameRebateArgs {

    @Field(() => GameRebateWhereInput, {nullable:true})
    @Type(() => GameRebateWhereInput)
    where?: GameRebateWhereInput;
}
