import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutCurrent_active_playersInput } from './players-update-without-current-active-players.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutCurrent_active_playersInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutCurrent_active_playersInput, {nullable:false})
    @Type(() => playersUpdateWithoutCurrent_active_playersInput)
    data!: playersUpdateWithoutCurrent_active_playersInput;
}
