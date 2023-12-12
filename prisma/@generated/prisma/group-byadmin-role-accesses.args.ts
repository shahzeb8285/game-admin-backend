import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_role_accessesOrderByWithAggregationInput } from '../admin-role-accesses/admin-role-accesses-order-by-with-aggregation.input';
import { Admin_role_accessesScalarFieldEnum } from './admin-role-accesses-scalar-field.enum';
import { admin_role_accessesScalarWhereWithAggregatesInput } from '../admin-role-accesses/admin-role-accesses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByadminRoleAccessesArgs {

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    @Type(() => admin_role_accessesWhereInput)
    where?: admin_role_accessesWhereInput;

    @Field(() => [admin_role_accessesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<admin_role_accessesOrderByWithAggregationInput>;

    @Field(() => [Admin_role_accessesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Admin_role_accessesScalarFieldEnum>;

    @Field(() => admin_role_accessesScalarWhereWithAggregatesInput, {nullable:true})
    having?: admin_role_accessesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
