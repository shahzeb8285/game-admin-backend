import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentUpdateWithoutAdminsInput } from './manual-adjustment-update-without-admins.input';

@InputType()
export class ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: ManualAdjustmentWhereUniqueInput;

    @Field(() => ManualAdjustmentUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateWithoutAdminsInput)
    data!: ManualAdjustmentUpdateWithoutAdminsInput;
}
