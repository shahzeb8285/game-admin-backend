import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_accessesCreateManyInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:false})
    access_name!: string;
}
