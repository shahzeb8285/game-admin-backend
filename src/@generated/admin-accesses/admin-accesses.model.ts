import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admin_role_accesses } from '../admin-role-accesses/admin-role-accesses.model';
import { Admin_accessesCount } from '../prisma/admin-accesses-count.output';

@ObjectType()
export class admin_accesses {

    @Field(() => ID, {nullable:false})
    admin_access_id!: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => [admin_role_accesses], {nullable:true})
    admin_role_accesses?: Array<admin_role_accesses>;

    @Field(() => Admin_accessesCount, {nullable:false})
    _count?: Admin_accessesCount;
}
