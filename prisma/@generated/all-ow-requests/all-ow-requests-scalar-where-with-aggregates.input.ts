import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class all_ow_requestsScalarWhereWithAggregatesInput {

    @Field(() => [all_ow_requestsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<all_ow_requestsScalarWhereWithAggregatesInput>;

    @Field(() => [all_ow_requestsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<all_ow_requestsScalarWhereWithAggregatesInput>;

    @Field(() => [all_ow_requestsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<all_ow_requestsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    allow_request_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    request?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
