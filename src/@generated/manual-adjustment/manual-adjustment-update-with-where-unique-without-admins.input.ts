import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentUpdateWithoutAdminsInput } from './manual-adjustment-update-without-admins.input';

@InputType()
export class ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => ManualAdjustmentUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateWithoutAdminsInput)
    data!: ManualAdjustmentUpdateWithoutAdminsInput;
}
