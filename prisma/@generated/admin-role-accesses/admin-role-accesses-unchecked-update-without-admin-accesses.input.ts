import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class admin_role_accessesUncheckedUpdateWithoutAdmin_accessesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_id?: StringFieldUpdateOperationsInput;
}
