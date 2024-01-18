import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AdminAccesses } from '../../@generated/admin-accesses/admin-accesses.model';
import { AdminRoleAccesses } from '../../@generated/admin-role-accesses/admin-role-accesses.model';






@ObjectType()
export class AdminAccesses1 {

    @Field(() => ID, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

   
}
@ObjectType()
export class AdminRoleAccesses1 {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_access_id!: string;

    @Field(() => AdminAccesses, {nullable:false})
    admin_accesses?: AdminAccesses;
}




@ObjectType()
export class AdminRoles {

    @Field(() => ID, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;


    @Field(() => [AdminRoleAccesses], {nullable:true})
    role_accesses?: Array<AdminRoleAccesses>;

}


@ObjectType()
export class AdminModal {

    @Field(() => ID, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    
    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => AdminRoles, {nullable:false})
    admin_roles?: AdminRoles;

   
}
