import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Admin_role_accessesListRelationFilter } from '../prisma/admin-role-accesses-list-relation-filter.input';

@InputType()
export class admin_accessesWhereInput {

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    AND?: Array<admin_accessesWhereInput>;

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    OR?: Array<admin_accessesWhereInput>;

    @Field(() => [admin_accessesWhereInput], {nullable:true})
    NOT?: Array<admin_accessesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    admin_access_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    access_name?: StringFilter;

    @Field(() => Admin_role_accessesListRelationFilter, {nullable:true})
    admin_role_accesses?: Admin_role_accessesListRelationFilter;
}
