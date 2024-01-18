import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CurrentActivePlayersCountAggregate {

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    last_active_time!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
