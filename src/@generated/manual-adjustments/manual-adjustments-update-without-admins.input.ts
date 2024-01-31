import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../players/players-update-one-required-without-manual-adjustments-nested.input';

@InputType()
export class manual_adjustmentsUpdateWithoutAdminsInput {

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
}
