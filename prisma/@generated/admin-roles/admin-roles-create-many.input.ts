import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_rolesCreateManyInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
