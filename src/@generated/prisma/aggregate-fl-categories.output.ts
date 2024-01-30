import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Fl_categoriesCountAggregate } from './fl-categories-count-aggregate.output';
import { Fl_categoriesAvgAggregate } from './fl-categories-avg-aggregate.output';
import { Fl_categoriesSumAggregate } from './fl-categories-sum-aggregate.output';
import { Fl_categoriesMinAggregate } from './fl-categories-min-aggregate.output';
import { Fl_categoriesMaxAggregate } from './fl-categories-max-aggregate.output';

@ObjectType()
export class AggregateFl_categories {

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
