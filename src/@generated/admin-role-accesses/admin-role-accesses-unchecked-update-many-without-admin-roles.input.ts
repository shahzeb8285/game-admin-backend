import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;
}
