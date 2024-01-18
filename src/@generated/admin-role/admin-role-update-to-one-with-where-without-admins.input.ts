import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { Type } from 'class-transformer';
import { AdminRoleUpdateWithoutAdminsInput } from './admin-role-update-without-admins.input';

@InputType()
export class AdminRoleUpdateToOneWithWhereWithoutAdminsInput {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;

    @Field(() => AdminRoleUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminRoleUpdateWithoutAdminsInput)
    data!: AdminRoleUpdateWithoutAdminsInput;
}
