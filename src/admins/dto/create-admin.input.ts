import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateAdminInput {

   
    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;


    @Field(() => String, {nullable:false})
    admin_roles_id!: String;

}
