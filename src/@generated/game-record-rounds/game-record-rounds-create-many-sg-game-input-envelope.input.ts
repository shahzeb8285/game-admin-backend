import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManySg_gameInput } from './game-record-rounds-create-many-sg-game.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManySg_gameInputEnvelope {

    @Field(() => [game_record_roundsCreateManySg_gameInput], {nullable:false})
    @Type(() => game_record_roundsCreateManySg_gameInput)
    data!: Array<game_record_roundsCreateManySg_gameInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
