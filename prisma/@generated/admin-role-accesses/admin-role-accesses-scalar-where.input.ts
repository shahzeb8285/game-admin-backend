import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class admin_role_accessesScalarWhereInput {

    @Field(() => [admin_role_accessesScalarWhereInput], {nullable:true})
    AND?: Array<admin_role_accessesScalarWhereInput>;

    @Field(() => [admin_role_accessesScalarWhereInput], {nullable:true})
    OR?: Array<admin_role_accessesScalarWhereInput>;

    @Field(() => [admin_role_accessesScalarWhereInput], {nullable:true})
    NOT?: Array<admin_role_accessesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_access_id?: StringFilter;
}
