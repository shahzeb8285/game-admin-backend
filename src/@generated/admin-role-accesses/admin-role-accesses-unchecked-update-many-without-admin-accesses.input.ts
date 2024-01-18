import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;
}
