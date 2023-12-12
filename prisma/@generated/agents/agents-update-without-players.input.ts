import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { agent_rebatesUpdateManyWithoutAgentsNestedInput } from '../agent-rebates/agent-rebates-update-many-without-agents-nested.input';
import { agentsUpdateOneWithoutChildrenNestedInput } from './agents-update-one-without-children-nested.input';
import { agentsUpdateManyWithoutParentNestedInput } from './agents-update-many-without-parent-nested.input';

@InputType()
export class agentsUpdateWithoutPlayersInput {

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

    @Field(() => agent_rebatesUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebates?: agent_rebatesUpdateManyWithoutAgentsNestedInput;

    @Field(() => agentsUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: agentsUpdateOneWithoutChildrenNestedInput;

    @Field(() => agentsUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: agentsUpdateManyWithoutParentNestedInput;
}
