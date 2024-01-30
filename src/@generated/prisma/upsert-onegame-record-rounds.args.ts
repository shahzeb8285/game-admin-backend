import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from '../game-record-rounds/game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateInput } from '../game-record-rounds/game-record-rounds-create.input';
import { game_record_roundsUpdateInput } from '../game-record-rounds/game-record-rounds-update.input';

@ArgsType()
export class UpsertOnegameRecordRoundsArgs {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateInput, {nullable:false})
    @Type(() => game_record_roundsCreateInput)
    create!: game_record_roundsCreateInput;

    @Field(() => game_record_roundsUpdateInput, {nullable:false})
    @Type(() => game_record_roundsUpdateInput)
    update!: game_record_roundsUpdateInput;
}
