import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CurrentActivePlayersScalarWhereWithAggregatesInput {

    @Field(() => [CurrentActivePlayersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CurrentActivePlayersScalarWhereWithAggregatesInput>;

    @Field(() => [CurrentActivePlayersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CurrentActivePlayersScalarWhereWithAggregatesInput>;

    @Field(() => [CurrentActivePlayersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CurrentActivePlayersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    last_active_time?: DateTimeWithAggregatesFilter;
}
