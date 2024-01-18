import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentUpdateInput } from './manual-adjustment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';

@ArgsType()
export class UpdateOneManualAdjustmentArgs {

    @Field(() => ManualAdjustmentUpdateInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateInput)
    data!: ManualAdjustmentUpdateInput;

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>;
}
