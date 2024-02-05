import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_record_roundsInput } from './players-create-without-game-record-rounds.input';

@InputType()
export class playersCreateOrConnectWithoutGame_record_roundsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_record_roundsInput)
    create!: playersCreateWithoutGame_record_roundsInput;
}
