import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateWithoutAdminsInput } from './manual-adjustment-create-without-admins.input';

@InputType()
export class ManualAdjustmentCreateOrConnectWithoutAdminsInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: ManualAdjustmentWhereUniqueInput;

    @Field(() => ManualAdjustmentCreateWithoutAdminsInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateWithoutAdminsInput)
    create!: ManualAdjustmentCreateWithoutAdminsInput;
}
