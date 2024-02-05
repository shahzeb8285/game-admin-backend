import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManyPlayerInput } from './game-record-rounds-create-many-player.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManyPlayerInputEnvelope {

    @Field(() => [game_record_roundsCreateManyPlayerInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyPlayerInput)
    data!: Array<game_record_roundsCreateManyPlayerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
