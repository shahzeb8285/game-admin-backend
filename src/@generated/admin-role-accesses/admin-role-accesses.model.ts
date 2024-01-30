import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admin_roles } from '../admin-roles/admin-roles.model';
import { admin_accesses } from '../admin-accesses/admin-accesses.model';

@ObjectType()
export class admin_role_accesses {

    @Field(() => ID, {nullable:false})
    admin_role_access_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_access_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => admin_roles, {nullable:false})
    admin_roles?: admin_roles;

    @Field(() => admin_accesses, {nullable:false})
    admin_accesses?: admin_accesses;
}
