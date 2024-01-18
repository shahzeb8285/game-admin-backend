import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesUncheckedUpdateWithoutAdmin_rolesInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;
}
