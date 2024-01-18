
import { InputType, Field } from '@nestjs/graphql';



@InputType()
export class UpdateRoleInput   {

   
    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:true})
    admin_role_name: string;

    @Field(() => [String], {nullable:true})
    added_access_names: string[]
    

    @Field(() => [String], {nullable:true})
    remove_access_names:string[]
    

    @Field(() => Boolean, {nullable:true})
    enabled?:boolean
}
