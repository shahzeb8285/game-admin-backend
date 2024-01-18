import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AdminRoleScalarWhereWithAggregatesInput {

    @Field(() => [AdminRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminRoleScalarWhereWithAggregatesInput>;

    @Field(() => [AdminRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminRoleScalarWhereWithAggregatesInput>;

    @Field(() => [AdminRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminRoleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_role_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_role_name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
