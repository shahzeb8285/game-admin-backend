import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { categories_mappingsCountOrderByAggregateInput } from './categories-mappings-count-order-by-aggregate.input';
import { categories_mappingsAvgOrderByAggregateInput } from './categories-mappings-avg-order-by-aggregate.input';
import { categories_mappingsMaxOrderByAggregateInput } from './categories-mappings-max-order-by-aggregate.input';
import { categories_mappingsMinOrderByAggregateInput } from './categories-mappings-min-order-by-aggregate.input';
import { categories_mappingsSumOrderByAggregateInput } from './categories-mappings-sum-order-by-aggregate.input';

@InputType()
export class categories_mappingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    categories_mapping_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sg_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fl_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => categories_mappingsCountOrderByAggregateInput, {nullable:true})
    _count?: categories_mappingsCountOrderByAggregateInput;

    @Field(() => categories_mappingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: categories_mappingsAvgOrderByAggregateInput;

    @Field(() => categories_mappingsMaxOrderByAggregateInput, {nullable:true})
    _max?: categories_mappingsMaxOrderByAggregateInput;

    @Field(() => categories_mappingsMinOrderByAggregateInput, {nullable:true})
    _min?: categories_mappingsMinOrderByAggregateInput;

    @Field(() => categories_mappingsSumOrderByAggregateInput, {nullable:true})
    _sum?: categories_mappingsSumOrderByAggregateInput;
}
