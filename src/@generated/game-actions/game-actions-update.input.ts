import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class game_actionsUpdateInput {

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
