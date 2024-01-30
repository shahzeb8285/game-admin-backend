import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Sg_countries_restrictionsCountAggregate } from './sg-countries-restrictions-count-aggregate.output';
import { Sg_countries_restrictionsAvgAggregate } from './sg-countries-restrictions-avg-aggregate.output';
import { Sg_countries_restrictionsSumAggregate } from './sg-countries-restrictions-sum-aggregate.output';
import { Sg_countries_restrictionsMinAggregate } from './sg-countries-restrictions-min-aggregate.output';
import { Sg_countries_restrictionsMaxAggregate } from './sg-countries-restrictions-max-aggregate.output';

@ObjectType()
export class Sg_countries_restrictionsGroupBy {

    @Field(() => String, {nullable:false})
    sg_coun_rest_id!: string;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => String, {nullable:false})
    coun_rest_name!: string;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => String, {nullable:false})
    countries!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Sg_countries_restrictionsCountAggregate, {nullable:true})
    _count?: Sg_countries_restrictionsCountAggregate;

    @Field(() => Sg_countries_restrictionsAvgAggregate, {nullable:true})
    _avg?: Sg_countries_restrictionsAvgAggregate;

    @Field(() => Sg_countries_restrictionsSumAggregate, {nullable:true})
    _sum?: Sg_countries_restrictionsSumAggregate;

    @Field(() => Sg_countries_restrictionsMinAggregate, {nullable:true})
    _min?: Sg_countries_restrictionsMinAggregate;

    @Field(() => Sg_countries_restrictionsMaxAggregate, {nullable:true})
    _max?: Sg_countries_restrictionsMaxAggregate;
}
