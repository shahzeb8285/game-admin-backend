import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_role_accessesUncheckedCreateWithoutAdmin_rolesInput {

    @Field(() => String, {nullable:false})
    admin_access_id!: string;
}
