import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from '../admin-roles/admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesOrderByWithAggregationInput } from '../admin-roles/admin-roles-order-by-with-aggregation.input';
import { Admin_rolesScalarFieldEnum } from './admin-roles-scalar-field.enum';
import { admin_rolesScalarWhereWithAggregatesInput } from '../admin-roles/admin-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByadminRolesArgs {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => [admin_rolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<admin_rolesOrderByWithAggregationInput>;

    @Field(() => [Admin_rolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Admin_rolesScalarFieldEnum>;

    @Field(() => admin_rolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: admin_rolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
