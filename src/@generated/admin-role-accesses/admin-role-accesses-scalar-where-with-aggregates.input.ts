import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AdminRoleAccessesScalarWhereWithAggregatesInput {

    @Field(() => [AdminRoleAccessesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminRoleAccessesScalarWhereWithAggregatesInput>;

    @Field(() => [AdminRoleAccessesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminRoleAccessesScalarWhereWithAggregatesInput>;

    @Field(() => [AdminRoleAccessesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminRoleAccessesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_role_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_access_id?: StringWithAggregatesFilter;
}
