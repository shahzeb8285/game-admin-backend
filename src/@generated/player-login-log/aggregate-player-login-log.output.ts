import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayerLoginLogCountAggregate } from './player-login-log-count-aggregate.output';
import { PlayerLoginLogMinAggregate } from './player-login-log-min-aggregate.output';
import { PlayerLoginLogMaxAggregate } from './player-login-log-max-aggregate.output';

@ObjectType()
export class AggregatePlayerLoginLog {

    @Field(() => PlayerLoginLogCountAggregate, {nullable:true})
    _count?: PlayerLoginLogCountAggregate;

    @Field(() => PlayerLoginLogMinAggregate, {nullable:true})
    _min?: PlayerLoginLogMinAggregate;

    @Field(() => PlayerLoginLogMaxAggregate, {nullable:true})
    _max?: PlayerLoginLogMaxAggregate;
}
