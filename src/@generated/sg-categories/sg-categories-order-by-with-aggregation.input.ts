import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sg_categoriesCountOrderByAggregateInput } from './sg-categories-count-order-by-aggregate.input';
import { sg_categoriesAvgOrderByAggregateInput } from './sg-categories-avg-order-by-aggregate.input';
import { sg_categoriesMaxOrderByAggregateInput } from './sg-categories-max-order-by-aggregate.input';
import { sg_categoriesMinOrderByAggregateInput } from './sg-categories-min-order-by-aggregate.input';
import { sg_categoriesSumOrderByAggregateInput } from './sg-categories-sum-order-by-aggregate.input';

@InputType()
export class sg_categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sg_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    csort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => sg_categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: sg_categoriesCountOrderByAggregateInput;

    @Field(() => sg_categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: sg_categoriesAvgOrderByAggregateInput;

    @Field(() => sg_categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: sg_categoriesMaxOrderByAggregateInput;

    @Field(() => sg_categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: sg_categoriesMinOrderByAggregateInput;

    @Field(() => sg_categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: sg_categoriesSumOrderByAggregateInput;
}
