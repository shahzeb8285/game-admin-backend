import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class adminsScalarWhereWithAggregatesInput {

    @Field(() => [adminsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<adminsScalarWhereWithAggregatesInput>;

    @Field(() => [adminsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<adminsScalarWhereWithAggregatesInput>;

    @Field(() => [adminsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<adminsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    admin_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_password?: StringWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    admin_role_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
