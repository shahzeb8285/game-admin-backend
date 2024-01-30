import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from '../admin-accesses/admin-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_accessesOrderByWithAggregationInput } from '../admin-accesses/admin-accesses-order-by-with-aggregation.input';
import { Admin_accessesScalarFieldEnum } from './admin-accesses-scalar-field.enum';
import { admin_accessesScalarWhereWithAggregatesInput } from '../admin-accesses/admin-accesses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByadminAccessesArgs {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;

    @Field(() => [admin_accessesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<admin_accessesOrderByWithAggregationInput>;

    @Field(() => [Admin_accessesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Admin_accessesScalarFieldEnum>;

    @Field(() => admin_accessesScalarWhereWithAggregatesInput, {nullable:true})
    having?: admin_accessesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
