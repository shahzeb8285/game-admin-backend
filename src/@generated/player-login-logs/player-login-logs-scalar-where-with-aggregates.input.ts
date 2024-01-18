import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class player_login_logsScalarWhereWithAggregatesInput {

    @Field(() => [player_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<player_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => [player_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<player_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => [player_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<player_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ip?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    login_time?: DateTimeWithAggregatesFilter;
}
