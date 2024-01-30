import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsWhereInput } from '../sg-merchants/sg-merchants-where.input';
import { Type } from 'class-transformer';
import { sg_merchantsOrderByWithAggregationInput } from '../sg-merchants/sg-merchants-order-by-with-aggregation.input';
import { Sg_merchantsScalarFieldEnum } from './sg-merchants-scalar-field.enum';
import { sg_merchantsScalarWhereWithAggregatesInput } from '../sg-merchants/sg-merchants-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysgMerchantsArgs {

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;

    @Field(() => [sg_merchantsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sg_merchantsOrderByWithAggregationInput>;

    @Field(() => [Sg_merchantsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Sg_merchantsScalarFieldEnum>;

    @Field(() => sg_merchantsScalarWhereWithAggregatesInput, {nullable:true})
    having?: sg_merchantsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
