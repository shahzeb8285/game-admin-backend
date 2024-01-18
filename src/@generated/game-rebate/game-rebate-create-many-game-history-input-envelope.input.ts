import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateCreateManyGame_historyInput } from './game-rebate-create-many-game-history.input';
import { Type } from 'class-transformer';

@InputType()
export class GameRebateCreateManyGame_historyInputEnvelope {

    @Field(() => [GameRebateCreateManyGame_historyInput], {nullable:false})
    @Type(() => GameRebateCreateManyGame_historyInput)
    data!: Array<GameRebateCreateManyGame_historyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
