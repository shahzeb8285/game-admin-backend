import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AdminAccessesScalarWhereWithAggregatesInput {

    @Field(() => [AdminAccessesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminAccessesScalarWhereWithAggregatesInput>;

    @Field(() => [AdminAccessesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminAccessesScalarWhereWithAggregatesInput>;

    @Field(() => [AdminAccessesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminAccessesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_access_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    access_name?: StringWithAggregatesFilter;
}
