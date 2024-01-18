import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayerCountAggregate } from './player-count-aggregate.output';
import { PlayerMinAggregate } from './player-min-aggregate.output';
import { PlayerMaxAggregate } from './player-max-aggregate.output';

@ObjectType()
export class PlayerGroupBy {

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

    @Field(() => PlayerCountAggregate, {nullable:true})
    _count?: PlayerCountAggregate;

    @Field(() => PlayerMinAggregate, {nullable:true})
    _min?: PlayerMinAggregate;

    @Field(() => PlayerMaxAggregate, {nullable:true})
    _max?: PlayerMaxAggregate;
}
