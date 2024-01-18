import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutCurrent_active_playersInput } from './players-create-without-current-active-players.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutCurrent_active_playersInput } from './players-create-or-connect-without-current-active-players.input';
import { playersUpsertWithoutCurrent_active_playersInput } from './players-upsert-without-current-active-players.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutCurrent_active_playersInput } from './players-update-to-one-with-where-without-current-active-players.input';

@InputType()
export class playersUpdateOneRequiredWithoutCurrent_active_playersNestedInput {

    @Field(() => playersCreateWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersCreateWithoutCurrent_active_playersInput)
    create?: playersCreateWithoutCurrent_active_playersInput;

    @Field(() => playersCreateOrConnectWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutCurrent_active_playersInput)
    connectOrCreate?: playersCreateOrConnectWithoutCurrent_active_playersInput;

    @Field(() => playersUpsertWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersUpsertWithoutCurrent_active_playersInput)
    upsert?: playersUpsertWithoutCurrent_active_playersInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutCurrent_active_playersInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutCurrent_active_playersInput)
    update?: playersUpdateToOneWithWhereWithoutCurrent_active_playersInput;
}
