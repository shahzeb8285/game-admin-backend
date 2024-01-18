import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_role_accessesCreateManyAdmin_accessesInput {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;
}
