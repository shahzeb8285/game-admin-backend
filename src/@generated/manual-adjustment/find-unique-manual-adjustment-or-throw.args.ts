import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueManualAdjustmentOrThrowArgs {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>;
}
