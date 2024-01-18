import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput } from '../players/players-update-one-required-without-player-login-logs-nested.input';

@InputType()
export class player_login_logsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ip?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    login_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput;
}
