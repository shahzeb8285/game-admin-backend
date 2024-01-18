import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerCreateNestedOneWithoutManual_adjustmentsInput } from '../player/player-create-nested-one-without-manual-adjustments.input';
import { AdminCreateNestedOneWithoutManual_adjustmentsInput } from '../admin/admin-create-nested-one-without-manual-adjustments.input';

@InputType()
export class ManualAdjustmentCreateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => PlayerCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    players!: PlayerCreateNestedOneWithoutManual_adjustmentsInput;

    @Field(() => AdminCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    admins!: AdminCreateNestedOneWithoutManual_adjustmentsInput;
}
