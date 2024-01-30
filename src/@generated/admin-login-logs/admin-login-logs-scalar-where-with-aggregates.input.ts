import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class admin_login_logsScalarWhereWithAggregatesInput {

    @Field(() => [admin_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<admin_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => [admin_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<admin_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => [admin_login_logsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<admin_login_logsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_login_log_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ip?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    login_time?: DateTimeWithAggregatesFilter;
}
