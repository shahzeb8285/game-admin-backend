import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AdminListRelationFilter } from '../admin/admin-list-relation-filter.input';
import { AdminRoleAccessesListRelationFilter } from '../admin-role-accesses/admin-role-accesses-list-relation-filter.input';

@InputType()
export class AdminRoleWhereUniqueInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    AND?: Array<AdminRoleWhereInput>;

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    OR?: Array<AdminRoleWhereInput>;

    @Field(() => [AdminRoleWhereInput], {nullable:true})
    NOT?: Array<AdminRoleWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AdminListRelationFilter, {nullable:true})
    admins?: AdminListRelationFilter;

    @Field(() => AdminRoleAccessesListRelationFilter, {nullable:true})
    role_accesses?: AdminRoleAccessesListRelationFilter;
}
