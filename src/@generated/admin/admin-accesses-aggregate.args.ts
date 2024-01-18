import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from '../admin-accesses/admin-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminAccessesOrderByWithRelationInput } from '../admin-accesses/admin-accesses-order-by-with-relation.input';
import { AdminAccessesWhereUniqueInput } from '../admin-accesses/admin-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminAccessesCountAggregateInput } from '../admin-accesses/admin-accesses-count-aggregate.input';
import { AdminAccessesMinAggregateInput } from '../admin-accesses/admin-accesses-min-aggregate.input';
import { AdminAccessesMaxAggregateInput } from '../admin-accesses/admin-accesses-max-aggregate.input';

@ArgsType()
export class AdminAccessesAggregateArgs {

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;

    @Field(() => [AdminAccessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminAccessesOrderByWithRelationInput>;

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:true})
    cursor?: AdminAccessesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminAccessesCountAggregateInput, {nullable:true})
    _count?: AdminAccessesCountAggregateInput;

    @Field(() => AdminAccessesMinAggregateInput, {nullable:true})
    _min?: AdminAccessesMinAggregateInput;

    @Field(() => AdminAccessesMaxAggregateInput, {nullable:true})
    _max?: AdminAccessesMaxAggregateInput;
}
