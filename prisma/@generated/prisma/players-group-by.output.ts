import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayersCountAggregate } from './players-count-aggregate.output';
import { PlayersMinAggregate } from './players-min-aggregate.output';
import { PlayersMaxAggregate } from './players-max-aggregate.output';

@ObjectType()
export class PlayersGroupBy {

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_user_name!: string;

    @Field(() => String, {nullable:false})
    tg_photo_url!: string;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    agent_id_r!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => PlayersCountAggregate, {nullable:true})
    _count?: PlayersCountAggregate;

    @Field(() => PlayersMinAggregate, {nullable:true})
    _min?: PlayersMinAggregate;

    @Field(() => PlayersMaxAggregate, {nullable:true})
    _max?: PlayersMaxAggregate;
}
