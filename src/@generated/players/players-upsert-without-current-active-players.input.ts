import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutCurrent_active_playersInput } from './players-update-without-current-active-players.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutCurrent_active_playersInput } from './players-create-without-current-active-players.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutCurrent_active_playersInput {

    @Field(() => playersUpdateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => playersUpdateWithoutCurrent_active_playersInput)
    update!: playersUpdateWithoutCurrent_active_playersInput;

    @Field(() => playersCreateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => playersCreateWithoutCurrent_active_playersInput)
    create!: playersCreateWithoutCurrent_active_playersInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
