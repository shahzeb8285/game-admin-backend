import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutCurrent_active_playersInput } from './player-create-without-current-active-players.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutCurrent_active_playersInput } from './player-create-or-connect-without-current-active-players.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutCurrent_active_playersInput {

    @Field(() => PlayerCreateWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerCreateWithoutCurrent_active_playersInput)
    create?: PlayerCreateWithoutCurrent_active_playersInput;

    @Field(() => PlayerCreateOrConnectWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutCurrent_active_playersInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutCurrent_active_playersInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;
}
