import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class manual_adjustmentsScalarWhereWithAggregatesInput {

    @Field(() => [manual_adjustmentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<manual_adjustmentsScalarWhereWithAggregatesInput>;

    @Field(() => [manual_adjustmentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<manual_adjustmentsScalarWhereWithAggregatesInput>;

    @Field(() => [manual_adjustmentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<manual_adjustmentsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    manual_adjustment_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
