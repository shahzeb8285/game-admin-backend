import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { AdminsOrderByWithRelationInput } from './admins-order-by-with-relation.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminsCountAggregateInput } from './admins-count-aggregate.input';
import { AdminsMinAggregateInput } from './admins-min-aggregate.input';
import { AdminsMaxAggregateInput } from './admins-max-aggregate.input';

@ArgsType()
export class AdminsAggregateArgs {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;

    @Field(() => [AdminsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminsOrderByWithRelationInput>;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    cursor?: AdminsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminsCountAggregateInput, {nullable:true})
    _count?: AdminsCountAggregateInput;

    @Field(() => AdminsMinAggregateInput, {nullable:true})
    _min?: AdminsMinAggregateInput;

    @Field(() => AdminsMaxAggregateInput, {nullable:true})
    _max?: AdminsMaxAggregateInput;
}
