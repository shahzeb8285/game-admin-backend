import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { AdminCreateNestedOneWithoutManual_adjustmentsInput } from '../admin/admin-create-nested-one-without-manual-adjustments.input';

@InputType()
export class ManualAdjustmentCreateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => AdminCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    admins!: AdminCreateNestedOneWithoutManual_adjustmentsInput;
}
