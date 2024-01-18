import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesUncheckedCreateWithoutAdmin_accessesInput {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;
}
