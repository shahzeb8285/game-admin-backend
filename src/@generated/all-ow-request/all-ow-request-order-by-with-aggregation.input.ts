import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AllOwRequestCountOrderByAggregateInput } from './all-ow-request-count-order-by-aggregate.input';
import { AllOwRequestMaxOrderByAggregateInput } from './all-ow-request-max-order-by-aggregate.input';
import { AllOwRequestMinOrderByAggregateInput } from './all-ow-request-min-order-by-aggregate.input';

@InputType()
export class AllOwRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    allow_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => AllOwRequestCountOrderByAggregateInput, {nullable:true})
    _count?: AllOwRequestCountOrderByAggregateInput;

    @Field(() => AllOwRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: AllOwRequestMaxOrderByAggregateInput;

    @Field(() => AllOwRequestMinOrderByAggregateInput, {nullable:true})
    _min?: AllOwRequestMinOrderByAggregateInput;
}
