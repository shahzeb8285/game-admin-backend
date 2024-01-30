import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class unprocessed_game_round_infosUpdateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;
}
