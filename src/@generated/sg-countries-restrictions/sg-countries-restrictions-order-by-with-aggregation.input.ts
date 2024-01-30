import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sg_countries_restrictionsCountOrderByAggregateInput } from './sg-countries-restrictions-count-order-by-aggregate.input';
import { sg_countries_restrictionsAvgOrderByAggregateInput } from './sg-countries-restrictions-avg-order-by-aggregate.input';
import { sg_countries_restrictionsMaxOrderByAggregateInput } from './sg-countries-restrictions-max-order-by-aggregate.input';
import { sg_countries_restrictionsMinOrderByAggregateInput } from './sg-countries-restrictions-min-order-by-aggregate.input';
import { sg_countries_restrictionsSumOrderByAggregateInput } from './sg-countries-restrictions-sum-order-by-aggregate.input';

@InputType()
export class sg_countries_restrictionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sg_coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coun_rest_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countries?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => sg_countries_restrictionsCountOrderByAggregateInput, {nullable:true})
    _count?: sg_countries_restrictionsCountOrderByAggregateInput;

    @Field(() => sg_countries_restrictionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: sg_countries_restrictionsAvgOrderByAggregateInput;

    @Field(() => sg_countries_restrictionsMaxOrderByAggregateInput, {nullable:true})
    _max?: sg_countries_restrictionsMaxOrderByAggregateInput;

    @Field(() => sg_countries_restrictionsMinOrderByAggregateInput, {nullable:true})
    _min?: sg_countries_restrictionsMinOrderByAggregateInput;

    @Field(() => sg_countries_restrictionsSumOrderByAggregateInput, {nullable:true})
    _sum?: sg_countries_restrictionsSumOrderByAggregateInput;
}
