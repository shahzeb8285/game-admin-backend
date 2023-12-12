import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutCurrent_active_playersInput } from './players-create-without-current-active-players.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutCurrent_active_playersInput } from './players-create-or-connect-without-current-active-players.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutCurrent_active_playersInput {

    @Field(() => playersCreateWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersCreateWithoutCurrent_active_playersInput)
    create?: playersCreateWithoutCurrent_active_playersInput;

    @Field(() => playersCreateOrConnectWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutCurrent_active_playersInput)
    connectOrCreate?: playersCreateOrConnectWithoutCurrent_active_playersInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
