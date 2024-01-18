import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AdminRoleAccessesScalarWhereInput {

    @Field(() => [AdminRoleAccessesScalarWhereInput], {nullable:true})
    AND?: Array<AdminRoleAccessesScalarWhereInput>;

    @Field(() => [AdminRoleAccessesScalarWhereInput], {nullable:true})
    OR?: Array<AdminRoleAccessesScalarWhereInput>;

    @Field(() => [AdminRoleAccessesScalarWhereInput], {nullable:true})
    NOT?: Array<AdminRoleAccessesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_access_id?: StringFilter;
}
