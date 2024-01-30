import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsCreateInput } from '../game-record-rounds/game-record-rounds-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameRecordRoundsArgs {

    @Field(() => game_record_roundsCreateInput, {nullable:false})
    @Type(() => game_record_roundsCreateInput)
    data!: game_record_roundsCreateInput;
}
