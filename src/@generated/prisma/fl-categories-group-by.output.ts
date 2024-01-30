import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Fl_categoriesCountAggregate } from './fl-categories-count-aggregate.output';
import { Fl_categoriesAvgAggregate } from './fl-categories-avg-aggregate.output';
import { Fl_categoriesSumAggregate } from './fl-categories-sum-aggregate.output';
import { Fl_categoriesMinAggregate } from './fl-categories-min-aggregate.output';
import { Fl_categoriesMaxAggregate } from './fl-categories-max-aggregate.output';

@ObjectType()
export class Fl_categoriesGroupBy {

    @Field(() => String, {nullable:false})
    fl_categories_id!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    category_name!: string;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Int, {nullable:false})
    rebate_priority!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Fl_categoriesCountAggregate, {nullable:true})
    _count?: Fl_categoriesCountAggregate;

    @Field(() => Fl_categoriesAvgAggregate, {nullable:true})
    _avg?: Fl_categoriesAvgAggregate;

    @Field(() => Fl_categoriesSumAggregate, {nullable:true})
    _sum?: Fl_categoriesSumAggregate;

    @Field(() => Fl_categoriesMinAggregate, {nullable:true})
    _min?: Fl_categoriesMinAggregate;

    @Field(() => Fl_categoriesMaxAggregate, {nullable:true})
    _max?: Fl_categoriesMaxAggregate;
}
