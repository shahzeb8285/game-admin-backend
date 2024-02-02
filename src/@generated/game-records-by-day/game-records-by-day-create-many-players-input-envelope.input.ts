import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayCreateManyPlayersInput } from './game-records-by-day-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class game_records_by_dayCreateManyPlayersInputEnvelope {

    @Field(() => [game_records_by_dayCreateManyPlayersInput], {nullable:false})
    @Type(() => game_records_by_dayCreateManyPlayersInput)
    data!: Array<game_records_by_dayCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
