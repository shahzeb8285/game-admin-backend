import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AllOwRequestScalarWhereWithAggregatesInput {

    @Field(() => [AllOwRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AllOwRequestScalarWhereWithAggregatesInput>;

    @Field(() => [AllOwRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AllOwRequestScalarWhereWithAggregatesInput>;

    @Field(() => [AllOwRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AllOwRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    allow_request_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    request?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
