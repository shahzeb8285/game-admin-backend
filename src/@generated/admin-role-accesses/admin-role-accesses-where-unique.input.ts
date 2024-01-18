import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesAdmin_role_idAdmin_access_idCompoundUniqueInput } from './admin-role-accesses-admin-role-id-admin-access-id-compound-unique.input';
import { admin_role_accessesWhereInput } from './admin-role-accesses-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Admin_rolesRelationFilter } from '../prisma/admin-roles-relation-filter.input';
import { Admin_accessesRelationFilter } from '../prisma/admin-accesses-relation-filter.input';

@InputType()
export class admin_role_accessesWhereUniqueInput {

    @Field(() => admin_role_accessesAdmin_role_idAdmin_access_idCompoundUniqueInput, {nullable:true})
    admin_role_id_admin_access_id?: admin_role_accessesAdmin_role_idAdmin_access_idCompoundUniqueInput;

    @Field(() => [admin_role_accessesWhereInput], {nullable:true})
    AND?: Array<admin_role_accessesWhereInput>;

    @Field(() => [admin_role_accessesWhereInput], {nullable:true})
    OR?: Array<admin_role_accessesWhereInput>;

    @Field(() => [admin_role_accessesWhereInput], {nullable:true})
    NOT?: Array<admin_role_accessesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_access_id?: StringFilter;

    @Field(() => Admin_rolesRelationFilter, {nullable:true})
    admin_roles?: Admin_rolesRelationFilter;

    @Field(() => Admin_accessesRelationFilter, {nullable:true})
    admin_accesses?: Admin_accessesRelationFilter;
}
