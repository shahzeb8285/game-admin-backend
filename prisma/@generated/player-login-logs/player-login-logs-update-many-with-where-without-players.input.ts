import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsScalarWhereInput } from './player-login-logs-scalar-where.input';
import { Type } from 'class-transformer';
import { player_login_logsUpdateManyMutationInput } from './player-login-logs-update-many-mutation.input';

@InputType()
export class player_login_logsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => player_login_logsScalarWhereInput, {nullable:false})
    @Type(() => player_login_logsScalarWhereInput)
    where!: player_login_logsScalarWhereInput;

    @Field(() => player_login_logsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_login_logsUpdateManyMutationInput)
    data!: player_login_logsUpdateManyMutationInput;
}
