import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from './admin-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_accessesUpdateWithoutAdmin_role_accessesInput } from './admin-accesses-update-without-admin-role-accesses.input';

@InputType()
export class admin_accessesUpdateToOneWithWhereWithoutAdmin_role_accessesInput {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;

    @Field(() => admin_accessesUpdateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_accessesUpdateWithoutAdmin_role_accessesInput)
    data!: admin_accessesUpdateWithoutAdmin_role_accessesInput;
}
