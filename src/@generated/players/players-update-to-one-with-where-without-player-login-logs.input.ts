import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutPlayer_login_logsInput } from './players-update-without-player-login-logs.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutPlayer_login_logsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_login_logsInput)
    data!: playersUpdateWithoutPlayer_login_logsInput;
}
