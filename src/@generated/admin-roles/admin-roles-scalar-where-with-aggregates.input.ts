import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class admin_rolesScalarWhereWithAggregatesInput {

    @Field(() => [admin_rolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<admin_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [admin_rolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<admin_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [admin_rolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<admin_rolesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_role_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_role_name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
