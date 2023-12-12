import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from './admin-accesses-where.input';
import { Admin_role_accessesListRelationFilter } from '../prisma/admin-role-accesses-list-relation-filter.input';

@InputType()
export class admin_accessesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    AND?: Array<admin_accessesWhereInput>;

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    OR?: Array<admin_accessesWhereInput>;

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    NOT?: Array<admin_accessesWhereInput>;

    @Field(() => Admin_role_accessesListRelationFilter, {nullable:true})
    role_accesses?: Admin_role_accessesListRelationFilter;
}
