import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_role_accessesCreateManyInput {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_access_id!: string;
}
