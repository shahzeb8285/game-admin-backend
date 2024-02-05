import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManyGameInput } from './game-record-rounds-create-many-game.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManyGameInputEnvelope {

    @Field(() => [game_record_roundsCreateManyGameInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyGameInput)
    data!: Array<game_record_roundsCreateManyGameInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
