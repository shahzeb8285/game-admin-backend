import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlayerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    player_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    tg_id?: true;

    @Field(() => Boolean, {nullable:true})
    tg_first_name?: true;

    @Field(() => Boolean, {nullable:true})
    tg_last_name?: true;

    @Field(() => Boolean, {nullable:true})
    tg_user_name?: true;

    @Field(() => Boolean, {nullable:true})
    tg_photo_url?: true;

    @Field(() => Boolean, {nullable:true})
    user_language?: true;

    @Field(() => Boolean, {nullable:true})
    registration_ip?: true;

    @Field(() => Boolean, {nullable:true})
    agent_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    udate?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    registration_date?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
