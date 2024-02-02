import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManyPlayersInput } from './game-record-rounds-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManyPlayersInputEnvelope {

    @Field(() => [game_record_roundsCreateManyPlayersInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyPlayersInput)
    data!: Array<game_record_roundsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
