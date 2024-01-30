import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { all_ow_requestsCountOrderByAggregateInput } from './all-ow-requests-count-order-by-aggregate.input';
import { all_ow_requestsMaxOrderByAggregateInput } from './all-ow-requests-max-order-by-aggregate.input';
import { all_ow_requestsMinOrderByAggregateInput } from './all-ow-requests-min-order-by-aggregate.input';

@InputType()
export class all_ow_requestsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    all_ow_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => all_ow_requestsCountOrderByAggregateInput, {nullable:true})
    _count?: all_ow_requestsCountOrderByAggregateInput;

    @Field(() => all_ow_requestsMaxOrderByAggregateInput, {nullable:true})
    _max?: all_ow_requestsMaxOrderByAggregateInput;

    @Field(() => all_ow_requestsMinOrderByAggregateInput, {nullable:true})
    _min?: all_ow_requestsMinOrderByAggregateInput;
}
