import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { agentsUpdateOneRequiredWithoutAgent_rebatesNestedInput } from '../agents/agents-update-one-required-without-agent-rebates-nested.input';

@InputType()
export class agent_rebatesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    agent_rebate_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    game_id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rebate?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    from_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    thru_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_active?: BoolFieldUpdateOperationsInput;

    @Field(() => agentsUpdateOneRequiredWithoutAgent_rebatesNestedInput, {nullable:true})
    agents?: agentsUpdateOneRequiredWithoutAgent_rebatesNestedInput;
}
