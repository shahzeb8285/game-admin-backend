import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { Type } from 'class-transformer';
import { AdminRoleOrderByWithRelationInput } from './admin-role-order-by-with-relation.input';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleCountAggregateInput } from './admin-role-count-aggregate.input';
import { AdminRoleMinAggregateInput } from './admin-role-min-aggregate.input';
import { AdminRoleMaxAggregateInput } from './admin-role-max-aggregate.input';

@ArgsType()
export class AdminRoleAggregateArgs {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;

    @Field(() => [AdminRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminRoleOrderByWithRelationInput>;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    cursor?: AdminRoleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminRoleCountAggregateInput, {nullable:true})
    _count?: AdminRoleCountAggregateInput;

    @Field(() => AdminRoleMinAggregateInput, {nullable:true})
    _min?: AdminRoleMinAggregateInput;

    @Field(() => AdminRoleMaxAggregateInput, {nullable:true})
    _max?: AdminRoleMaxAggregateInput;
}
