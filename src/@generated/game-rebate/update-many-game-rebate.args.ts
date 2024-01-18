import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateUpdateManyMutationInput } from './game-rebate-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GameRebateWhereInput } from './game-rebate-where.input';

@ArgsType()
export class UpdateManyGameRebateArgs {

    @Field(() => GameRebateUpdateManyMutationInput, {nullable:false})
    @Type(() => GameRebateUpdateManyMutationInput)
    data!: GameRebateUpdateManyMutationInput;

    @Field(() => GameRebateWhereInput, {nullable:true})
    @Type(() => GameRebateWhereInput)
    where?: GameRebateWhereInput;
}
