import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsWhereInput } from '../manual-adjustments/manual-adjustments-where.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsOrderByWithRelationInput } from '../manual-adjustments/manual-adjustments-order-by-with-relation.input';
import { manual_adjustmentsWhereUniqueInput } from '../manual-adjustments/manual-adjustments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Manual_adjustmentsScalarFieldEnum } from './manual-adjustments-scalar-field.enum';

@ArgsType()
export class FindFirstmanualAdjustmentsOrThrowArgs {

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    @Type(() => manual_adjustmentsWhereInput)
    where?: manual_adjustmentsWhereInput;

    @Field(() => [manual_adjustmentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<manual_adjustmentsOrderByWithRelationInput>;

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:true})
    cursor?: manual_adjustmentsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Manual_adjustmentsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Manual_adjustmentsScalarFieldEnum>;
}
