import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Game_record_roundsListRelationFilter } from '../prisma/game-record-rounds-list-relation-filter.input';

@InputType()
export class game_round_infosWhereInput {

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    AND?: Array<game_round_infosWhereInput>;

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    OR?: Array<game_round_infosWhereInput>;

    @Field(() => [game_round_infosWhereInput], {nullable:true})
    NOT?: Array<game_round_infosWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    game_round_info_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_gamedesc?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    i_extparam?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    game_extra?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => Game_record_roundsListRelationFilter, {nullable:true})
    game_record_rounds?: Game_record_roundsListRelationFilter;
}
