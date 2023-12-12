import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Player_login_logsCountAggregate } from './player-login-logs-count-aggregate.output';
import { Player_login_logsMinAggregate } from './player-login-logs-min-aggregate.output';
import { Player_login_logsMaxAggregate } from './player-login-logs-max-aggregate.output';

@ObjectType()
export class AggregatePlayer_login_logs {

    @Field(() => Player_login_logsCountAggregate, {nullable:true})
    _count?: Player_login_logsCountAggregate;

    @Field(() => Player_login_logsMinAggregate, {nullable:true})
    _min?: Player_login_logsMinAggregate;

    @Field(() => Player_login_logsMaxAggregate, {nullable:true})
    _max?: Player_login_logsMaxAggregate;
}
