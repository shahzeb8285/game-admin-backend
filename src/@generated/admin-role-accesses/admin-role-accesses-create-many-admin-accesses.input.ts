import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesCreateManyAdmin_accessesInput {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;
}
