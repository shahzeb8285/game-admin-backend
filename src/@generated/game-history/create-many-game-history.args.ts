import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryCreateManyInput } from './game-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGameHistoryArgs {

    @Field(() => [GameHistoryCreateManyInput], {nullable:false})
    @Type(() => GameHistoryCreateManyInput)
    data!: Array<GameHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
