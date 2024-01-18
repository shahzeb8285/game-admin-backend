import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ManualAdjustmentCountAggregate } from './manual-adjustment-count-aggregate.output';
import { ManualAdjustmentAvgAggregate } from './manual-adjustment-avg-aggregate.output';
import { ManualAdjustmentSumAggregate } from './manual-adjustment-sum-aggregate.output';
import { ManualAdjustmentMinAggregate } from './manual-adjustment-min-aggregate.output';
import { ManualAdjustmentMaxAggregate } from './manual-adjustment-max-aggregate.output';

@ObjectType()
export class AggregateManualAdjustment {

    @Field(() => ManualAdjustmentCountAggregate, {nullable:true})
    _count?: ManualAdjustmentCountAggregate;

    @Field(() => ManualAdjustmentAvgAggregate, {nullable:true})
    _avg?: ManualAdjustmentAvgAggregate;

    @Field(() => ManualAdjustmentSumAggregate, {nullable:true})
    _sum?: ManualAdjustmentSumAggregate;

    @Field(() => ManualAdjustmentMinAggregate, {nullable:true})
    _min?: ManualAdjustmentMinAggregate;

    @Field(() => ManualAdjustmentMaxAggregate, {nullable:true})
    _max?: ManualAdjustmentMaxAggregate;
}
