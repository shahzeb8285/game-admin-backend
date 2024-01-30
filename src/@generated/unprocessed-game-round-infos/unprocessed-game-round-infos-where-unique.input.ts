import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereInput } from './unprocessed-game-round-infos-where.input';

@InputType()
export class unprocessed_game_round_infosWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    AND?: Array<unprocessed_game_round_infosWhereInput>;

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    OR?: Array<unprocessed_game_round_infosWhereInput>;

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    NOT?: Array<unprocessed_game_round_infosWhereInput>;
}
