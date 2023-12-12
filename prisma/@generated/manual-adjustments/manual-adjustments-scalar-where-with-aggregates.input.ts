import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    manual_adjustment_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by_r?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
