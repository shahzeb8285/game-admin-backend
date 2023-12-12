import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutPlayer_login_logsInput } from './players-update-without-player-login-logs.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_login_logsInput } from './players-create-without-player-login-logs.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutPlayer_login_logsInput {

    @Field(() => playersUpdateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_login_logsInput)
    update!: playersUpdateWithoutPlayer_login_logsInput;

    @Field(() => playersCreateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_login_logsInput)
    create!: playersCreateWithoutPlayer_login_logsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
