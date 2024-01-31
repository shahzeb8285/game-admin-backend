import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsWhereInput } from '../player-login-logs/player-login-logs-where.input';

@InputType()
export class Player_login_logsListRelationFilter {

    @Field(() => player_login_logsWhereInput, {nullable:true})
    every?: player_login_logsWhereInput;

    @Field(() => player_login_logsWhereInput, {nullable:true})
    some?: player_login_logsWhereInput;

    @Field(() => player_login_logsWhereInput, {nullable:true})
    none?: player_login_logsWhereInput;
}
