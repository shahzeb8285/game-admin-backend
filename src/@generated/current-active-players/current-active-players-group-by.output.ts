import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrentActivePlayersCountAggregate } from './current-active-players-count-aggregate.output';
import { CurrentActivePlayersMinAggregate } from './current-active-players-min-aggregate.output';
import { CurrentActivePlayersMaxAggregate } from './current-active-players-max-aggregate.output';

@ObjectType()
export class CurrentActivePlayersGroupBy {

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => Date, {nullable:false})
    last_active_time!: Date | string;

    @Field(() => CurrentActivePlayersCountAggregate, {nullable:true})
    _count?: CurrentActivePlayersCountAggregate;

    @Field(() => CurrentActivePlayersMinAggregate, {nullable:true})
    _min?: CurrentActivePlayersMinAggregate;

    @Field(() => CurrentActivePlayersMaxAggregate, {nullable:true})
    _max?: CurrentActivePlayersMaxAggregate;
}
