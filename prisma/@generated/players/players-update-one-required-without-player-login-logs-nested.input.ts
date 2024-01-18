import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_login_logsInput } from './players-create-without-player-login-logs.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_login_logsInput } from './players-create-or-connect-without-player-login-logs.input';
import { playersUpsertWithoutPlayer_login_logsInput } from './players-upsert-without-player-login-logs.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutPlayer_login_logsInput } from './players-update-to-one-with-where-without-player-login-logs.input';

@InputType()
export class playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput {

    @Field(() => playersCreateWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_login_logsInput)
    create?: playersCreateWithoutPlayer_login_logsInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_login_logsInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_login_logsInput;

    @Field(() => playersUpsertWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersUpsertWithoutPlayer_login_logsInput)
    upsert?: playersUpsertWithoutPlayer_login_logsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutPlayer_login_logsInput)
    update?: playersUpdateToOneWithWhereWithoutPlayer_login_logsInput;
}
