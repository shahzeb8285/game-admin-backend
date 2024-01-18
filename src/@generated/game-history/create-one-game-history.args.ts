import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryCreateInput } from './game-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGameHistoryArgs {

    @Field(() => GameHistoryCreateInput, {nullable:false})
    @Type(() => GameHistoryCreateInput)
    data!: GameHistoryCreateInput;
}
