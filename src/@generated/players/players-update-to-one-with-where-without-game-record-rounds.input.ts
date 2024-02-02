import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutGame_record_roundsInput } from './players-update-without-game-record-rounds.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutGame_record_roundsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_record_roundsInput)
    data!: playersUpdateWithoutGame_record_roundsInput;
}
