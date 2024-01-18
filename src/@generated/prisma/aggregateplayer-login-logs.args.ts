import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsWhereInput } from '../player-login-logs/player-login-logs-where.input';
import { Type } from 'class-transformer';
import { player_login_logsOrderByWithRelationInput } from '../player-login-logs/player-login-logs-order-by-with-relation.input';
import { player_login_logsWhereUniqueInput } from '../player-login-logs/player-login-logs-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateplayerLoginLogsArgs {

    @Field(() => player_login_logsWhereInput, {nullable:true})
    @Type(() => player_login_logsWhereInput)
    where?: player_login_logsWhereInput;

    @Field(() => [player_login_logsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<player_login_logsOrderByWithRelationInput>;

    @Field(() => player_login_logsWhereUniqueInput, {nullable:true})
    cursor?: player_login_logsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
