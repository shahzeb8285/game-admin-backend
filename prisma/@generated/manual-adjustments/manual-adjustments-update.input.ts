import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../players/players-update-one-required-without-manual-adjustments-nested.input';
import { adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput } from '../admins/admins-update-one-required-without-manual-adjustments-nested.input';

@InputType()
export class manual_adjustmentsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    manual_adjustment_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reason?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput;

    @Field(() => adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput, {nullable:true})
    admins?: adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput;
}
