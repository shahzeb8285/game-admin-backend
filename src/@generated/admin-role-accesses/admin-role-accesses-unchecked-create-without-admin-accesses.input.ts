import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_role_accessesUncheckedCreateWithoutAdmin_accessesInput {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;
}
