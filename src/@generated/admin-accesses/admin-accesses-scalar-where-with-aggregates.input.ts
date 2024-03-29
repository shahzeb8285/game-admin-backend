import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class admin_accessesScalarWhereWithAggregatesInput {

    @Field(() => [admin_accessesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<admin_accessesScalarWhereWithAggregatesInput>;

    @Field(() => [admin_accessesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<admin_accessesScalarWhereWithAggregatesInput>;

    @Field(() => [admin_accessesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<admin_accessesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    admin_access_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    access_name?: StringWithAggregatesFilter;
}
