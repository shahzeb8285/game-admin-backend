import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutGame_record_roundsInput } from './players-update-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_record_roundsInput } from './players-create-without-game-record-rounds.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutGame_record_roundsInput {

    @Field(() => playersUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_record_roundsInput)
    update!: playersUpdateWithoutGame_record_roundsInput;

    @Field(() => playersCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_record_roundsInput)
    create!: playersCreateWithoutGame_record_roundsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
