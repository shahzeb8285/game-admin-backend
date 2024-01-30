import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class game_actionsCreateInput {

    @Field(() => String, {nullable:true})
    game_action_id?: string;

    @Field(() => String, {nullable:false})
    actid!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:false})
    timestamp!: string;

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;
}
