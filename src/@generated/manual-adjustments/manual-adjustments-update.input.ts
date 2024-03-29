import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../players/players-update-one-required-without-manual-adjustments-nested.input';
import { adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../admins/admins-update-one-required-without-manual-adjustments-nested.input';

@InputType()
export class manual_adjustmentsUpdateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput;

    @Field(() => adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    admins?: adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput;
}
