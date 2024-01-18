import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsWhereInput } from '../manual-adjustments/manual-adjustments-where.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsOrderByWithAggregationInput } from '../manual-adjustments/manual-adjustments-order-by-with-aggregation.input';
import { Manual_adjustmentsScalarFieldEnum } from './manual-adjustments-scalar-field.enum';
import { manual_adjustmentsScalarWhereWithAggregatesInput } from '../manual-adjustments/manual-adjustments-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    @Type(() => manual_adjustmentsWhereInput)
    where?: manual_adjustmentsWhereInput;

    @Field(() => [manual_adjustmentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<manual_adjustmentsOrderByWithAggregationInput>;

    @Field(() => [Manual_adjustmentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Manual_adjustmentsScalarFieldEnum>;

    @Field(() => manual_adjustmentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: manual_adjustmentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
