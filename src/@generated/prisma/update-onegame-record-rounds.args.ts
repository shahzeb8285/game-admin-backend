import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsUpdateInput } from '../game-record-rounds/game-record-rounds-update.input';
import { Type } from 'class-transformer';
import { game_record_roundsWhereUniqueInput } from '../game-record-rounds/game-record-rounds-where-unique.input';

@ArgsType()
export class UpdateOnegameRecordRoundsArgs {

    @Field(() => game_record_roundsUpdateInput, {nullable:false})
    @Type(() => game_record_roundsUpdateInput)
    data!: game_record_roundsUpdateInput;

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;
}
