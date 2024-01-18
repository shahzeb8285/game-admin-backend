import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleUpdateWithoutAdminsInput } from './admin-role-update-without-admins.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateWithoutAdminsInput } from './admin-role-create-without-admins.input';
import { AdminRoleWhereInput } from './admin-role-where.input';

@InputType()
export class AdminRoleUpsertWithoutAdminsInput {

    @Field(() => AdminRoleUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminRoleUpdateWithoutAdminsInput)
    update!: AdminRoleUpdateWithoutAdminsInput;

    @Field(() => AdminRoleCreateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminRoleCreateWithoutAdminsInput)
    create!: AdminRoleCreateWithoutAdminsInput;

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;
}
