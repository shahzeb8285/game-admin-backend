import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereInput } from '../sg-countries-restrictions/sg-countries-restrictions-where.input';
import { Type } from 'class-transformer';
import { sg_countries_restrictionsOrderByWithAggregationInput } from '../sg-countries-restrictions/sg-countries-restrictions-order-by-with-aggregation.input';
import { Sg_countries_restrictionsScalarFieldEnum } from './sg-countries-restrictions-scalar-field.enum';
import { sg_countries_restrictionsScalarWhereWithAggregatesInput } from '../sg-countries-restrictions/sg-countries-restrictions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsWhereInput, {nullable:true})
    @Type(() => sg_countries_restrictionsWhereInput)
    where?: sg_countries_restrictionsWhereInput;

    @Field(() => [sg_countries_restrictionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sg_countries_restrictionsOrderByWithAggregationInput>;

    @Field(() => [Sg_countries_restrictionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Sg_countries_restrictionsScalarFieldEnum>;

    @Field(() => sg_countries_restrictionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: sg_countries_restrictionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
