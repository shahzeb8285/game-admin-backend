import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateRoleInput {

   
    @Field(() => String, {nullable:false})
    admin_role_name!: string;

}
