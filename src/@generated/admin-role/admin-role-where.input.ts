import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AdminListRelationFilter } from '../admin/admin-list-relation-filter.input';
import { AdminRoleAccessesListRelationFilter } from '../admin-role-accesses/admin-role-accesses-list-relation-filter.input';

@InputType()
export class AdminRoleWhereInput {

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    AND?: Array<AdminRoleWhereInput>;

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    OR?: Array<AdminRoleWhereInput>;

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    NOT?: Array<AdminRoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_role_name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AdminListRelationFilter, {nullable:true})
    admins?: AdminListRelationFilter;

    @Field(() => AdminRoleAccessesListRelationFilter, {nullable:true})
    role_accesses?: AdminRoleAccessesListRelationFilter;
}
