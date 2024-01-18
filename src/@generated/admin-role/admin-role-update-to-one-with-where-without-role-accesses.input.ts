import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { Type } from 'class-transformer';
import { AdminRoleUpdateWithoutRole_accessesInput } from './admin-role-update-without-role-accesses.input';

@InputType()
export class AdminRoleUpdateToOneWithWhereWithoutRole_accessesInput {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;

    @Field(() => AdminRoleUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminRoleUpdateWithoutRole_accessesInput)
    data!: AdminRoleUpdateWithoutRole_accessesInput;
}
