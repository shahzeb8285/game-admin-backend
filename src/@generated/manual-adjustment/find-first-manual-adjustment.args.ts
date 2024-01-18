import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentWhereInput } from './manual-adjustment-where.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentOrderByWithRelationInput } from './manual-adjustment-order-by-with-relation.input';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ManualAdjustmentScalarFieldEnum } from './manual-adjustment-scalar-field.enum';

@ArgsType()
export class FindFirstManualAdjustmentArgs {

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    @Type(() => ManualAdjustmentWhereInput)
    where?: ManualAdjustmentWhereInput;

    @Field(() => [ManualAdjustmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ManualAdjustmentOrderByWithRelationInput>;

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:true})
    cursor?: ManualAdjustmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ManualAdjustmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ManualAdjustmentScalarFieldEnum>;
}
