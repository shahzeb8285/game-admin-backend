import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Sg_categoriesCountAggregate } from './sg-categories-count-aggregate.output';
import { Sg_categoriesAvgAggregate } from './sg-categories-avg-aggregate.output';
import { Sg_categoriesSumAggregate } from './sg-categories-sum-aggregate.output';
import { Sg_categoriesMinAggregate } from './sg-categories-min-aggregate.output';
import { Sg_categoriesMaxAggregate } from './sg-categories-max-aggregate.output';

@ObjectType()
export class Sg_categoriesGroupBy {

    @Field(() => String, {nullable:false})
    sg_category_id!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    category_name!: string;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Sg_categoriesCountAggregate, {nullable:true})
    _count?: Sg_categoriesCountAggregate;

    @Field(() => Sg_categoriesAvgAggregate, {nullable:true})
    _avg?: Sg_categoriesAvgAggregate;

    @Field(() => Sg_categoriesSumAggregate, {nullable:true})
    _sum?: Sg_categoriesSumAggregate;

    @Field(() => Sg_categoriesMinAggregate, {nullable:true})
    _min?: Sg_categoriesMinAggregate;

    @Field(() => Sg_categoriesMaxAggregate, {nullable:true})
    _max?: Sg_categoriesMaxAggregate;
}
