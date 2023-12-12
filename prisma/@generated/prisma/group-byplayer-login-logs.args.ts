import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsWhereInput } from '../player-login-logs/player-login-logs-where.input';
import { Type } from 'class-transformer';
import { player_login_logsOrderByWithAggregationInput } from '../player-login-logs/player-login-logs-order-by-with-aggregation.input';
import { Player_login_logsScalarFieldEnum } from './player-login-logs-scalar-field.enum';
import { player_login_logsScalarWhereWithAggregatesInput } from '../player-login-logs/player-login-logs-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByplayerLoginLogsArgs {

    @Field(() => player_login_logsWhereInput, {nullable:true})
    @Type(() => player_login_logsWhereInput)
    where?: player_login_logsWhereInput;

    @Field(() => [player_login_logsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<player_login_logsOrderByWithAggregationInput>;

    @Field(() => [Player_login_logsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Player_login_logsScalarFieldEnum>;

    @Field(() => player_login_logsScalarWhereWithAggregatesInput, {nullable:true})
    having?: player_login_logsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
