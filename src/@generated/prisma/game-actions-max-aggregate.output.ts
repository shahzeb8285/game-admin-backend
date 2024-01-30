import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Game_actionsMaxAggregate {

    @Field(() => String, {nullable:true})
    game_action_id?: string;

    @Field(() => String, {nullable:true})
    actid?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    amount?: string;

    @Field(() => String, {nullable:true})
    timestamp?: string;

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;
}
