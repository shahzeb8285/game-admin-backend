import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class game_round_infos {

    @Field(() => ID, {nullable:false})
    game_round_info_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:false})
    i_extparam!: string;

    @Field(() => String, {nullable:false})
    game_extra!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;
}
