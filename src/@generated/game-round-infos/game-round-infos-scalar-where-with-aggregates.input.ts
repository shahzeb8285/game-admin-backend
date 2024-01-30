import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class game_round_infosScalarWhereWithAggregatesInput {

    @Field(() => [game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => [game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => [game_round_infosScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_round_infosScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_round_info_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    i_gamedesc?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    i_extparam?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_extra?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
