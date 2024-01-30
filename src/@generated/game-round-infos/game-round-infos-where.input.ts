import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class game_round_infosWhereInput {

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    AND?: Array<game_round_infosWhereInput>;

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    OR?: Array<game_round_infosWhereInput>;

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    NOT?: Array<game_round_infosWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_round_info_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_gamedesc?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_extparam?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_extra?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
