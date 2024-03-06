import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksWhereInput } from './banks-where.input';
import { Type } from 'class-transformer';
import { banksOrderByWithAggregationInput } from './banks-order-by-with-aggregation.input';
import { BanksScalarFieldEnum } from '../prisma/banks-scalar-field.enum';
import { banksScalarWhereWithAggregatesInput } from './banks-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class banksGroupByArgs {

    @Field(() => banksWhereInput, {nullable:true})
    @Type(() => banksWhereInput)
    where?: banksWhereInput;

    @Field(() => [banksOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<banksOrderByWithAggregationInput>;

    @Field(() => [BanksScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BanksScalarFieldEnum>;

    @Field(() => banksScalarWhereWithAggregatesInput, {nullable:true})
    having?: banksScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
