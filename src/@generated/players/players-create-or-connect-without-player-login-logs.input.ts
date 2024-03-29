import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_login_logsInput } from './players-create-without-player-login-logs.input';

@InputType()
export class playersCreateOrConnectWithoutPlayer_login_logsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_login_logsInput)
    create!: playersCreateWithoutPlayer_login_logsInput;
}
