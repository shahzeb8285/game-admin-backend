import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../admins/admins-update-one-required-without-manual-adjustments-nested.input';

@InputType()
export class manual_adjustmentsUpdateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    admins?: adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput;
}
