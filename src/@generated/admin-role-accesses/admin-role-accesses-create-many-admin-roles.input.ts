import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_role_accessesCreateManyAdmin_rolesInput {

    @Field(() => String, {nullable:false})
    admin_access_id!: string;
}
