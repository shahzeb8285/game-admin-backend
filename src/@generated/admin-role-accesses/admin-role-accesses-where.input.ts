import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AdminRoleRelationFilter } from '../admin-role/admin-role-relation-filter.input';
import { AdminAccessesRelationFilter } from '../admin-accesses/admin-accesses-relation-filter.input';

@InputType()
export class AdminRoleAccessesWhereInput {

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
