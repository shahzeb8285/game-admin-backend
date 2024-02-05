import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManyGame_roundInput } from './game-record-rounds-create-many-game-round.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManyGame_roundInputEnvelope {

    @Field(() => [game_record_roundsCreateManyGame_roundInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyGame_roundInput)
    data!: Array<game_record_roundsCreateManyGame_roundInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
