import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class current_active_playersUncheckedUpdateManyWithoutPlayersInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    last_active_time?: DateTimeFieldUpdateOperationsInput;
}
