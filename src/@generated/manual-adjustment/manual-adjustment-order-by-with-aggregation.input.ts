import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ManualAdjustmentCountOrderByAggregateInput } from './manual-adjustment-count-order-by-aggregate.input';
import { ManualAdjustmentAvgOrderByAggregateInput } from './manual-adjustment-avg-order-by-aggregate.input';
import { ManualAdjustmentMaxOrderByAggregateInput } from './manual-adjustment-max-order-by-aggregate.input';
import { ManualAdjustmentMinOrderByAggregateInput } from './manual-adjustment-min-order-by-aggregate.input';
import { ManualAdjustmentSumOrderByAggregateInput } from './manual-adjustment-sum-order-by-aggregate.input';

@InputType()
export class ManualAdjustmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    manual_adjustment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => ManualAdjustmentCountOrderByAggregateInput, {nullable:true})
    _count?: ManualAdjustmentCountOrderByAggregateInput;

    @Field(() => ManualAdjustmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ManualAdjustmentAvgOrderByAggregateInput;

    @Field(() => ManualAdjustmentMaxOrderByAggregateInput, {nullable:true})
    _max?: ManualAdjustmentMaxOrderByAggregateInput;

    @Field(() => ManualAdjustmentMinOrderByAggregateInput, {nullable:true})
    _min?: ManualAdjustmentMinOrderByAggregateInput;

    @Field(() => ManualAdjustmentSumOrderByAggregateInput, {nullable:true})
    _sum?: ManualAdjustmentSumOrderByAggregateInput;
}
