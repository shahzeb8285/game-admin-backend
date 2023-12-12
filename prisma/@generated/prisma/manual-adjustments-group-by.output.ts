import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Manual_adjustmentsCountAggregate } from './manual-adjustments-count-aggregate.output';
import { Manual_adjustmentsAvgAggregate } from './manual-adjustments-avg-aggregate.output';
import { Manual_adjustmentsSumAggregate } from './manual-adjustments-sum-aggregate.output';
import { Manual_adjustmentsMinAggregate } from './manual-adjustments-min-aggregate.output';
import { Manual_adjustmentsMaxAggregate } from './manual-adjustments-max-aggregate.output';

@ObjectType()
export class Manual_adjustmentsGroupBy {

    @Field(() => String, {nullable:false})
    manual_adjustment_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    created_by_r!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Manual_adjustmentsCountAggregate, {nullable:true})
    _count?: Manual_adjustmentsCountAggregate;

    @Field(() => Manual_adjustmentsAvgAggregate, {nullable:true})
    _avg?: Manual_adjustmentsAvgAggregate;

    @Field(() => Manual_adjustmentsSumAggregate, {nullable:true})
    _sum?: Manual_adjustmentsSumAggregate;

    @Field(() => Manual_adjustmentsMinAggregate, {nullable:true})
    _min?: Manual_adjustmentsMinAggregate;

    @Field(() => Manual_adjustmentsMaxAggregate, {nullable:true})
    _max?: Manual_adjustmentsMaxAggregate;
}
