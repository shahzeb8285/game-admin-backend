import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayerLoginLogCountAggregate } from './player-login-log-count-aggregate.output';
import { PlayerLoginLogMinAggregate } from './player-login-log-min-aggregate.output';
import { PlayerLoginLogMaxAggregate } from './player-login-log-max-aggregate.output';

@ObjectType()
export class PlayerLoginLogGroupBy {

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;

    @Field(() => PlayerLoginLogCountAggregate, {nullable:true})
    _count?: PlayerLoginLogCountAggregate;

    @Field(() => PlayerLoginLogMinAggregate, {nullable:true})
    _min?: PlayerLoginLogMinAggregate;

    @Field(() => PlayerLoginLogMaxAggregate, {nullable:true})
    _max?: PlayerLoginLogMaxAggregate;
}
