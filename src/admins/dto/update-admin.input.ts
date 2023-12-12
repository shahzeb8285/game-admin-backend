import { InputType, Field,  } from '@nestjs/graphql';

@InputType()
export class UpdateAdminInput  {
  @Field(() => String, {nullable:false})
  adminID: string;

  @Field(() => String, {nullable:true})
  adminName?: string;

  @Field(() => String, {nullable:true})
  adminPassword?: string;

  @Field(() => String, {nullable:true})
  adminRolesId?: String;
  
  @Field(() => Boolean, {nullable:true})
  enabled?: Boolean;

}
