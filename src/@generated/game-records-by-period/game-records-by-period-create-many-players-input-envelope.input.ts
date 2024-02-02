import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodCreateManyPlayersInput } from './game-records-by-period-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class game_records_by_periodCreateManyPlayersInputEnvelope {

    @Field(() => [game_records_by_periodCreateManyPlayersInput], {nullable:false})
    @Type(() => game_records_by_periodCreateManyPlayersInput)
    data!: Array<game_records_by_periodCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
