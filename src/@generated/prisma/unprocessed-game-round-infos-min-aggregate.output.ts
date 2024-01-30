import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Unprocessed_game_round_infosMinAggregate {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;
}
