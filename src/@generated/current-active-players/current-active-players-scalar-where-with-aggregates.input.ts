import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class current_active_playersScalarWhereWithAggregatesInput {

    @Field(() => [current_active_playersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<current_active_playersScalarWhereWithAggregatesInput>;

    @Field(() => [current_active_playersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<current_active_playersScalarWhereWithAggregatesInput>;

    @Field(() => [current_active_playersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<current_active_playersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    last_active_time?: DateTimeWithAggregatesFilter;
}
