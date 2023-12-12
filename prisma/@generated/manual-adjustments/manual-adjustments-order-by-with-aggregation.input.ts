import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { manual_adjustmentsCountOrderByAggregateInput } from './manual-adjustments-count-order-by-aggregate.input';
import { manual_adjustmentsAvgOrderByAggregateInput } from './manual-adjustments-avg-order-by-aggregate.input';
import { manual_adjustmentsMaxOrderByAggregateInput } from './manual-adjustments-max-order-by-aggregate.input';
import { manual_adjustmentsMinOrderByAggregateInput } from './manual-adjustments-min-order-by-aggregate.input';
import { manual_adjustmentsSumOrderByAggregateInput } from './manual-adjustments-sum-order-by-aggregate.input';

@InputType()
export class manual_adjustmentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    manual_adjustment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => manual_adjustmentsCountOrderByAggregateInput, {nullable:true})
    _count?: manual_adjustmentsCountOrderByAggregateInput;

    @Field(() => manual_adjustmentsAvgOrderByAggregateInput, {nullable:true})
    _avg?: manual_adjustmentsAvgOrderByAggregateInput;

    @Field(() => manual_adjustmentsMaxOrderByAggregateInput, {nullable:true})
    _max?: manual_adjustmentsMaxOrderByAggregateInput;

    @Field(() => manual_adjustmentsMinOrderByAggregateInput, {nullable:true})
    _min?: manual_adjustmentsMinOrderByAggregateInput;

    @Field(() => manual_adjustmentsSumOrderByAggregateInput, {nullable:true})
    _sum?: manual_adjustmentsSumOrderByAggregateInput;
}
