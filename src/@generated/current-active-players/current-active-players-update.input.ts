import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { playersUpdateOneRequiredWithoutCurrent_active_playersNestedInput } from '../players/players-update-one-required-without-current-active-players-nested.input';

@InputType()
export class current_active_playersUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    last_active_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => playersUpdateOneRequiredWithoutCurrent_active_playersNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutCurrent_active_playersNestedInput;
}
