import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class unprocessed_game_round_infos {

    @Field(() => ID, {nullable:false})
    game_round_info_id!: string;
}
