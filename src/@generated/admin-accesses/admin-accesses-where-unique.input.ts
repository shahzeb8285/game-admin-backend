import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';
import { AdminRoleAccessesListRelationFilter } from '../admin-role-accesses/admin-role-accesses-list-relation-filter.input';

@InputType()
export class AdminAccessesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    AND?: Array<AdminAccessesWhereInput>;

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    OR?: Array<AdminAccessesWhereInput>;

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    NOT?: Array<AdminAccessesWhereInput>;

    @Field(() => AdminRoleAccessesListRelationFilter, {nullable:true})
    role_accesses?: AdminRoleAccessesListRelationFilter;
}
