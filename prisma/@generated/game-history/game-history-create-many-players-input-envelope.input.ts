import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyCreateManyPlayersInput } from './game-history-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class game_historyCreateManyPlayersInputEnvelope {

    @Field(() => [game_historyCreateManyPlayersInput], {nullable:false})
    @Type(() => game_historyCreateManyPlayersInput)
    data!: Array<game_historyCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
