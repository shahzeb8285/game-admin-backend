import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGameHistoryArgs {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: GameHistoryWhereUniqueInput;
}
