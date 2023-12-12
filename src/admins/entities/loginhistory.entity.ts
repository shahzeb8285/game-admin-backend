import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Admin } from './admin.entity';






@ObjectType()
export class LoginHistory {

    @Field(() => ID, {nullable:false})
    login_id!: string;

    @Field(() => String, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => Admin, {nullable:false})
    admins?: Admin;
}




