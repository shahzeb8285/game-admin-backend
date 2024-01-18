import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryCreateManyPlayersInput } from './game-history-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class GameHistoryCreateManyPlayersInputEnvelope {

    @Field(() => [GameHistoryCreateManyPlayersInput], {nullable:false})
    @Type(() => GameHistoryCreateManyPlayersInput)
    data!: Array<GameHistoryCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
