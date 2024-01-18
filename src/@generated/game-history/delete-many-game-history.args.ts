import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGameHistoryArgs {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;
}
