import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../player/player-update-one-required-without-manual-adjustments-nested.input';
import { AdminUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../admin/admin-update-one-required-without-manual-adjustments-nested.input';

@InputType()
export class ManualAdjustmentUpdateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => PlayerUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutManual_adjustmentsNestedInput;

    @Field(() => AdminUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    admins?: AdminUpdateOneRequiredWithoutManual_adjustmentsNestedInput;
}
