import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleUpdateWithoutRole_accessesInput } from './admin-role-update-without-role-accesses.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateWithoutRole_accessesInput } from './admin-role-create-without-role-accesses.input';
import { AdminRoleWhereInput } from './admin-role-where.input';

@InputType()
export class AdminRoleUpsertWithoutRole_accessesInput {

    @Field(() => AdminRoleUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminRoleUpdateWithoutRole_accessesInput)
    update!: AdminRoleUpdateWithoutRole_accessesInput;

    @Field(() => AdminRoleCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminRoleCreateWithoutRole_accessesInput)
    create!: AdminRoleCreateWithoutRole_accessesInput;

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;
}
