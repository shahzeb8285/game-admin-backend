import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class unprocessed_game_round_infosWhereInput {

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    AND?: Array<unprocessed_game_round_infosWhereInput>;

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    OR?: Array<unprocessed_game_round_infosWhereInput>;

    @Field(() => [unprocessed_game_round_infosWhereInput], {nullable:true})
    NOT?: Array<unprocessed_game_round_infosWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_round_info_id?: StringFilter;
}
