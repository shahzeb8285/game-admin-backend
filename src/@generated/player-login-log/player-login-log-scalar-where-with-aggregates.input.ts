import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PlayerLoginLogScalarWhereWithAggregatesInput {

    @Field(() => [PlayerLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlayerLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => [PlayerLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlayerLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => [PlayerLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlayerLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ip?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    login_time?: DateTimeWithAggregatesFilter;
}
