import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesAdmin_role_idAdmin_access_idCompoundUniqueInput } from './admin-role-accesses-admin-role-id-admin-access-id-compound-unique.input';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AdminRoleRelationFilter } from '../admin-role/admin-role-relation-filter.input';
import { AdminAccessesRelationFilter } from '../admin-accesses/admin-accesses-relation-filter.input';

@InputType()
export class AdminRoleAccessesWhereUniqueInput {

    @Field(() => AdminRoleAccessesAdmin_role_idAdmin_access_idCompoundUniqueInput, {nullable:true})
    admin_role_id_admin_access_id?: AdminRoleAccessesAdmin_role_idAdmin_access_idCompoundUniqueInput;

    @Field(() => [AdminRoleAccessesWhereInput], {nullable:true})
    AND?: Array<AdminRoleAccessesWhereInput>;

    @Field(() => [AdminRoleAccessesWhereInput], {nullable:true})
    OR?: Array<AdminRoleAccessesWhereInput>;

    @Field(() => [AdminRoleAccessesWhereInput], {nullable:true})
    NOT?: Array<AdminRoleAccessesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_access_id?: StringFilter;

    @Field(() => AdminRoleRelationFilter, {nullable:true})
    admin_roles?: AdminRoleRelationFilter;

    @Field(() => AdminAccessesRelationFilter, {nullable:true})
    admin_accesses?: AdminAccessesRelationFilter;
}
