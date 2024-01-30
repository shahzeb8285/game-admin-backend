import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class game_actions {

    @Field(() => ID, {nullable:false})
    game_action_id!: string;

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
