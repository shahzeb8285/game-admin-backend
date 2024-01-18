import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesOrderByWithRelationInput } from '../admin-role-accesses/admin-role-accesses-order-by-with-relation.input';
import { AdminRoleAccessesWhereUniqueInput } from '../admin-role-accesses/admin-role-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleAccessesCountAggregateInput } from '../admin-role-accesses/admin-role-accesses-count-aggregate.input';
import { AdminRoleAccessesMinAggregateInput } from '../admin-role-accesses/admin-role-accesses-min-aggregate.input';
import { AdminRoleAccessesMaxAggregateInput } from '../admin-role-accesses/admin-role-accesses-max-aggregate.input';

@ArgsType()
export class AdminRoleAccessesAggregateArgs {

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    @Type(() => AdminRoleAccessesWhereInput)
    where?: AdminRoleAccessesWhereInput;

    @Field(() => [AdminRoleAccessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminRoleAccessesOrderByWithRelationInput>;

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:true})
    cursor?: AdminRoleAccessesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminRoleAccessesCountAggregateInput, {nullable:true})
    _count?: AdminRoleAccessesCountAggregateInput;

    @Field(() => AdminRoleAccessesMinAggregateInput, {nullable:true})
    _min?: AdminRoleAccessesMinAggregateInput;

    @Field(() => AdminRoleAccessesMaxAggregateInput, {nullable:true})
    _max?: AdminRoleAccessesMaxAggregateInput;
}
