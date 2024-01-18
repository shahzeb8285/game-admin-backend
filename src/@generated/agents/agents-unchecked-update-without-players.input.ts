import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { agent_rebatesUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-rebates/agent-rebates-unchecked-update-many-without-agents-nested.input';
import { agentsUncheckedUpdateManyWithoutParentNestedInput } from './agents-unchecked-update-many-without-parent-nested.input';

@InputType()
export class agentsUncheckedUpdateWithoutPlayersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    agent_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    agent_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    agent_password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    udate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parent_agent_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => agent_rebatesUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebates?: agent_rebatesUncheckedUpdateManyWithoutAgentsNestedInput;

    @Field(() => agentsUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: agentsUncheckedUpdateManyWithoutParentNestedInput;
}
