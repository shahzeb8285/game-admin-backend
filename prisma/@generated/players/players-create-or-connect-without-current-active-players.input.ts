import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutCurrent_active_playersInput } from './players-create-without-current-active-players.input';

@InputType()
export class playersCreateOrConnectWithoutCurrent_active_playersInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => playersCreateWithoutCurrent_active_playersInput)
    create!: playersCreateWithoutCurrent_active_playersInput;
}
