import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class admin_accessesUpdateWithoutRole_accessesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_access_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    access_name?: StringFieldUpdateOperationsInput;
}
