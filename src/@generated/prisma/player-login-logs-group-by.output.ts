import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Player_login_logsCountAggregate } from './player-login-logs-count-aggregate.output';
import { Player_login_logsMinAggregate } from './player-login-logs-min-aggregate.output';
import { Player_login_logsMaxAggregate } from './player-login-logs-max-aggregate.output';

@ObjectType()
export class Player_login_logsGroupBy {

    @Field(() => String, {nullable:false})
    player_login_log_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;

    @Field(() => Player_login_logsCountAggregate, {nullable:true})
    _count?: Player_login_logsCountAggregate;

    @Field(() => Player_login_logsMinAggregate, {nullable:true})
    _min?: Player_login_logsMinAggregate;

    @Field(() => Player_login_logsMaxAggregate, {nullable:true})
    _max?: Player_login_logsMaxAggregate;
}
