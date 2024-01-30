import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from '../game-record-rounds/game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegameRecordRoundsArgs {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;
}
