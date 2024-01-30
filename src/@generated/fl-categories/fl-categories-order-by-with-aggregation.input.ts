import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { fl_categoriesCountOrderByAggregateInput } from './fl-categories-count-order-by-aggregate.input';
import { fl_categoriesAvgOrderByAggregateInput } from './fl-categories-avg-order-by-aggregate.input';
import { fl_categoriesMaxOrderByAggregateInput } from './fl-categories-max-order-by-aggregate.input';
import { fl_categoriesMinOrderByAggregateInput } from './fl-categories-min-order-by-aggregate.input';
import { fl_categoriesSumOrderByAggregateInput } from './fl-categories-sum-order-by-aggregate.input';

@InputType()
export class fl_categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    fl_categories_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    csort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_priority?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => fl_categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: fl_categoriesCountOrderByAggregateInput;

    @Field(() => fl_categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: fl_categoriesAvgOrderByAggregateInput;

    @Field(() => fl_categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: fl_categoriesMaxOrderByAggregateInput;

    @Field(() => fl_categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: fl_categoriesMinOrderByAggregateInput;

    @Field(() => fl_categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: fl_categoriesSumOrderByAggregateInput;
}
