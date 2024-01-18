import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryUpdateManyMutationInput } from './game-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GameHistoryWhereInput } from './game-history-where.input';

@ArgsType()
export class UpdateManyGameHistoryArgs {

    @Field(() => GameHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GameHistoryUpdateManyMutationInput)
    data!: GameHistoryUpdateManyMutationInput;

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;
}
