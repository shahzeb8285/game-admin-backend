import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AdminLoginLogScalarWhereWithAggregatesInput {

    @Field(() => [AdminLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => [AdminLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => [AdminLoginLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminLoginLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_login_log_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ip?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    login_time?: DateTimeWithAggregatesFilter;
}
