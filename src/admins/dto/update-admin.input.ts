import { InputType, Field,  } from '@nestjs/graphql';

@InputType()
export class UpdateAdminInput  {
  @Field(() => String, {nullable:false})
  admin_id: string;

  @Field(() => String, {nullable:true})
  admin_name?: string;

  @Field(() => String, {nullable:true})
  admin_password?: string;

  @Field(() => String, {nullable:true})
  admin_roles_id?: String;
  
  @Field(() => Boolean, {nullable:true})
  enabled?: Boolean;

}
