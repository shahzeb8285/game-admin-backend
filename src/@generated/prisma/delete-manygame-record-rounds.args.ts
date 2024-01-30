import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameRecordRoundsArgs {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;
}
