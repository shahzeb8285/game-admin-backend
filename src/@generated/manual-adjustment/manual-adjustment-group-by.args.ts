import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentWhereInput } from './manual-adjustment-where.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentOrderByWithAggregationInput } from './manual-adjustment-order-by-with-aggregation.input';
import { ManualAdjustmentScalarFieldEnum } from './manual-adjustment-scalar-field.enum';
import { ManualAdjustmentScalarWhereWithAggregatesInput } from './manual-adjustment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ManualAdjustmentCountAggregateInput } from './manual-adjustment-count-aggregate.input';
import { ManualAdjustmentAvgAggregateInput } from './manual-adjustment-avg-aggregate.input';
import { ManualAdjustmentSumAggregateInput } from './manual-adjustment-sum-aggregate.input';
import { ManualAdjustmentMinAggregateInput } from './manual-adjustment-min-aggregate.input';
import { ManualAdjustmentMaxAggregateInput } from './manual-adjustment-max-aggregate.input';

@ArgsType()
export class ManualAdjustmentGroupByArgs {

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    @Type(() => ManualAdjustmentWhereInput)
    where?: ManualAdjustmentWhereInput;

    @Field(() => [ManualAdjustmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ManualAdjustmentOrderByWithAggregationInput>;

    @Field(() => [ManualAdjustmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ManualAdjustmentScalarFieldEnum>;

    @Field(() => ManualAdjustmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ManualAdjustmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ManualAdjustmentCountAggregateInput, {nullable:true})
    _count?: ManualAdjustmentCountAggregateInput;

    @Field(() => ManualAdjustmentAvgAggregateInput, {nullable:true})
    _avg?: ManualAdjustmentAvgAggregateInput;

    @Field(() => ManualAdjustmentSumAggregateInput, {nullable:true})
    _sum?: ManualAdjustmentSumAggregateInput;

    @Field(() => ManualAdjustmentMinAggregateInput, {nullable:true})
    _min?: ManualAdjustmentMinAggregateInput;

    @Field(() => ManualAdjustmentMaxAggregateInput, {nullable:true})
    _max?: ManualAdjustmentMaxAggregateInput;
}
