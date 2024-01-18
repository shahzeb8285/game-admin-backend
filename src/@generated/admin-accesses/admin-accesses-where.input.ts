import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AdminRoleAccessesListRelationFilter } from '../admin-role-accesses/admin-role-accesses-list-relation-filter.input';

@InputType()
export class AdminAccessesWhereInput {

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    AND?: Array<AdminAccessesWhereInput>;

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    OR?: Array<AdminAccessesWhereInput>;

    @Field(() => [AdminAccessesWhereInput], {nullable:true})
    NOT?: Array<AdminAccessesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_access_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    access_name?: StringFilter;

    @Field(() => AdminRoleAccessesListRelationFilter, {nullable:true})
    role_accesses?: AdminRoleAccessesListRelationFilter;
}
